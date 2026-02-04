import { NextResponse } from "next/server";

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  contestRating: number;
  ranking: number;
}

export async function GET() {
  try {
    const username = "pavanraut93";
    
    // Use LeetCode's GraphQL API with correct endpoint and query
    const graphqlQuery = {
      query: `
        query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            userContestRanking {
              rating
              globalRanking
            }
          }
        }
      `,
      variables: { username },
      operationName: "userPublicProfile",
    };

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": `https://leetcode.com/${username}/`,
        "Origin": "https://leetcode.com",
      },
      body: JSON.stringify(graphqlQuery),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("LeetCode API response not OK:", response.status, data);
      // Try alternative approach using public stats API
      return await fetchAlternativeStats(username);
    }

    if (data.errors) {
      console.error("LeetCode API errors:", data.errors);
      // Try alternative approach
      return await fetchAlternativeStats(username);
    }

    if (!data.data?.matchedUser) {
      console.error("No matched user found");
      // Try alternative approach
      return await fetchAlternativeStats(username);
    }

    const user = data.data.matchedUser;
    const submitStats = user.submitStats?.acSubmissionNum || [];
    
    // Find stats by difficulty
    const easyStat = submitStats.find((s: any) => s.difficulty === "Easy");
    const mediumStat = submitStats.find((s: any) => s.difficulty === "Medium");
    const hardStat = submitStats.find((s: any) => s.difficulty === "Hard");
    
    const totalSolved = (easyStat?.count || 0) + (mediumStat?.count || 0) + (hardStat?.count || 0);
    
    const stats: LeetCodeStats = {
      totalSolved,
      easy: easyStat?.count || 0,
      medium: mediumStat?.count || 0,
      hard: hardStat?.count || 0,
      contestRating: Math.round(user.userContestRanking?.rating || 0),
      ranking: user.profile?.ranking || 0,
    };

    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("LeetCode API error:", error);
    // Try alternative approach
    return await fetchAlternativeStats("pavanraut93");
  }
}

async function fetchAlternativeStats(username: string): Promise<NextResponse> {
  try {
    // Use a public LeetCode stats API service
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.status === "success") {
        const stats: LeetCodeStats = {
          totalSolved: data.totalSolved || 0,
          easy: data.easySolved || 0,
          medium: data.mediumSolved || 0,
          hard: data.hardSolved || 0,
          contestRating: data.ranking || 0,
          ranking: data.ranking || 0,
        };
        
        return NextResponse.json(stats, {
          headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        });
      }
    }
  } catch (error) {
    console.error("Alternative API error:", error);
  }

  // Final fallback: return zeros with a note that manual update is needed
  return NextResponse.json({
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    contestRating: 0,
    ranking: 0,
    note: "Unable to fetch live data. Please check LeetCode API availability.",
  });
}

