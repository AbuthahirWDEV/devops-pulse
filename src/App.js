import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import StatCard from "./components/StatCard";
import DeploymentTrend from "./components/DeploymentTrend";
import FailureRateChart from "./components/FailureRateChart";
import PipelineTable from "./components/PipelineTable";
import Insights from "./components/Insights";

function App() {
  return (
    <Container maxWidth="xl" style={{ marginTop: "30px" }}>
      <Typography variant="h4" gutterBottom>
        DevOps Pulse Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Pipelines" value="15" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Deployment Frequency" value="10 / week" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Change Failure Rate" value="12%" />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="MTTR" value="1.5 hrs" />
        </Grid>

        <Grid item xs={12} md={6}>
          <DeploymentTrend />
        </Grid>

        <Grid item xs={12} md={6}>
          <FailureRateChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <PipelineTable />
        </Grid>

        <Grid item xs={12} md={6}>
          <Insights />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;