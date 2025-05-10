"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Bhandara",
    location: "Gaon Me",
    date: "01/01/0001",
    description: "Mata Rani ka Bhandara",
    tag: "Hindu Event",
  },
];

const UserDashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" transition-all duration-30 rounded-2xl border border-gray-200"
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                {event.title}
              </CardTitle>
              <Badge variant="outline" className="mt-2 w-fit">
                {event.tag}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {event.description}
              </p>
              <div className="text-sm">
                <strong>Location:</strong> {event.location}
                <br />
                <strong>Date:</strong> {event.date}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default UserDashboard;
