import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Greeting } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: greeting, isLoading } = useQuery<Greeting>({
    queryKey: ["/api/greeting"],
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <Card className="w-full max-w-md mx-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Hello World
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
          ) : (
            <p className="text-xl text-muted-foreground">
              {greeting?.message || "Welcome to the app!"}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
