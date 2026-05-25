import { NextResponse } from "next/server";
import type { GitHubRepo } from "@/types";

export const revalidate = 3600;

export async function GET() {
  const username = process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) {
    return NextResponse.json({
      repos: [],
      error: "Set GITHUB_USERNAME in .env.local to load repositories.",
    });
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    const repos: GitHubRepo[] = data
      .filter((repo: { fork: boolean }) => !repo.fork)
      .slice(0, 6)
      .map(
        (repo: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          stargazers_count: number;
          language: string | null;
        }) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
        })
      );

    return NextResponse.json({ repos });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { repos: [], error: "Failed to fetch GitHub repositories." },
      { status: 500 }
    );
  }
}
