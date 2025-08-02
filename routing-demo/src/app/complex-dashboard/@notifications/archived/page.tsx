import { Card } from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href={"/complex-dashboard"}>Archived</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
