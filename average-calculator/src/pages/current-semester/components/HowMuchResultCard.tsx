import React from "react";
import { Typography } from "@ellucian/react-design-system/core";
import { Stack } from "../../../components/Stack";
import { GradeTextField } from "./GradeTextField";
import { BaseCard } from "./BaseCard";

export interface HowMuchResultCardProps {
  title: string;
  subtitle: string;
  value: number;
  onGradeChange: (data: number) => void;
}

export function HowMuchResultCard({
  title,
  subtitle,
  value,
  onGradeChange,
}: HowMuchResultCardProps) {
  return (
    <BaseCard>
      <Stack sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ¿Qué significa esto?
        </Typography>
      </Stack>
      <Stack sx={{ flexDirection: "row" }}>
        <GradeTextField value={value} onGradeChange={onGradeChange} />
      </Stack>
    </BaseCard>
  );
}