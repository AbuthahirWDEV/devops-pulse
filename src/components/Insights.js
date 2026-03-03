import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

function Insights() {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6">Key Insights</Typography>
        <List>
          <ListItem>⚠️ Most Failures: API Deployment</ListItem>
          <ListItem>⏱ Longest Build: Data Processing Job</ListItem>
          <ListItem>🚨 High Risk: Recent Rollback Detected</ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Insights;