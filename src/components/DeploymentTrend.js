import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", deployments: 5 },
  { week: "Week 2", deployments: 7 },
  { week: "Week 3", deployments: 9 },
  { week: "Week 4", deployments: 11 },
];

function DeploymentTrend() {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">Deployment Trend</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="deployments" stroke="#1976d2" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default DeploymentTrend;