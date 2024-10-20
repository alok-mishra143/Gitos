"use client";

import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, Users } from "lucide-react";

// Define the type for the props
interface UserProfileCardProps {
  user: {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    followers: number;
    public_repos: number;
    bio: string;
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <Card className="w-full max-w-md rounded-lg shadow-md overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h2 className="text-xl font-bold">User Profile</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={user.avatar_url}
                  alt={`${user.name}'s avatar`}
                />
                <AvatarFallback>
                  {user.login.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="ml-4 flex flex-col">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                @{user.login}
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">
                    {user.followers} followers
                  </span>
                </div>
                <div className="flex items-center">
                  <FolderGit2 className="w-5 h-5 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">
                    {user.public_repos} repos
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Profile Summary</h4>
            <p className="text-sm text-muted-foreground">{user.bio}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfileCard;
