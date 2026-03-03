import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

const data = [
    { name: "Web Build", status: "Success", duration: "5m 32s" },
    { name: "API Deploy", status: "Failed", duration: "12m 10s" },
    { name: "DB Migration", status: "Success", duration: "8m 45s" },
];

function PipelineTable() {
    return (
        <Card elevation={3}>
            <CardContent>
                <Typography variant="h6">Recent Pipeline Activity</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pipeline</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell style={{
                                    color: row.status === "Success" ? "green" : "red",
                                    fontWeight: 600
                                }}>
                                    {row.status}
                                </TableCell>
                                <TableCell>{row.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default PipelineTable;