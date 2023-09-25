import React from "react";
import {
  Typography,
  List,
  ListItem,
  Divider,
} from "@ellucian/react-design-system/core";
import { Stack } from "../../../components/Stack";
import { BaseCard } from "../../../components/BaseCard";
import { PartialComponent, SemesterCourse } from "../../../core/entities/courses";

export interface SemesterCourseCardProps {
  semesterCourse: SemesterCourse;
}

export function getGradeRepresentationOfComponent(component: PartialComponent) {
  const { wasEvaluated } = component;
  if (!wasEvaluated) {
    return "N/A";
  }

  return component.gradeAsString;
}

export function SemesterCourseCard({ semesterCourse }: SemesterCourseCardProps) {
  return (
    <BaseCard
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        breakInside: "avoid",
        mb: 2,
        p: 0,
        gap: 0,
      }}
    >
      <Stack sx={{ flexDirection: "row", width: "100%", p: 4 }}>
        <Stack sx={{ flexGrow: 1 }}>
          <Typography variant="h4">{semesterCourse.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Créditos: {semesterCourse.credits}
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            N/A
          </Typography>
        </Stack>
      </Stack>
      <List dense>
        {semesterCourse.components.map((component, index) => (
          <>
            <ListItem
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body1">
                {component.name} - {component.weight}%
              </Typography>
              <Typography variant="body1">
                {getGradeRepresentationOfComponent(component)}
              </Typography>
            </ListItem>
            {index < semesterCourse.components.length - 1 && (
              <Divider style={{ margin: 0 }} />
            )}
          </>
        ))}
      </List>
    </BaseCard>
  );
}
