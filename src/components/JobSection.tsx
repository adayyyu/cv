import { useState, useCallback } from "react";
import {
  Timeline,
  Text,
  Badge,
  Center,
  Box,
  Title,
  Flex,
  Container,
  useMantineColorScheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import ReactMarkdown from "react-markdown";
import { myJobExp } from "../data";
import { type JobExprience, WorkDuration } from "../types/jobExperience.type";
import {
  IconCalendarEvent,
  IconWorld,
  IconBriefcase,
  IconBuilding,
} from "@tabler/icons-react";

const CompanyName = ({
  companyName,
  companyLink,
}: {
  companyName: string;
  companyLink?: string;
}) => {
  if (companyLink) {
    return (
      <Text
        size="sm"
        ml={5}
        mr={10}
        fw={500}
        component="a"
        href={companyLink}
        target="_blank"
      >
        {companyName}
      </Text>
    );
  }
  return (
    <Text size="sm" ml={5} mr={10}>
      {companyName}
    </Text>
  );
};

const JobDescriptions = ({ descriptions }: { descriptions: string }) => {
  return <ReactMarkdown children={descriptions} />;
};

const WorkDurationText = ({ workDuration }: { workDuration: WorkDuration }) => {
  return (
    <Box component="div">
      <Center inline>
        <IconBriefcase size="1.125rem" />
          <Text mx={5} size="md">{workDuration.title}</Text>
        <IconCalendarEvent size="1.125rem" />
        <Text size="xs" mx={5}>
          {workDuration.fromDate.month} {workDuration.fromDate.year} to{" "}
          {workDuration.toDate
            ? workDuration.toDate?.month + " " + workDuration.toDate?.year
            : "PRESENT"}
        </Text>
        <Badge variant="outline" color="blue.5">{workDuration.mode}</Badge>
      </Center>
    </Box>
  );
};

const JobExprience = ({ data }: { data: JobExprience }) => {
  return (
    <Container fluid>
      <Flex maw="100%" wrap="wrap">
        <Center inline>
          <IconBuilding size="1.125rem" />
          <CompanyName
            companyName={data.companyName}
            companyLink={data.companyUrl}
          />
        </Center>
        <Center>
          <IconWorld size="1.125rem" />
          <Text size="sm" ml={5}>
            {data.location}
          </Text>
        </Center>
      </Flex>
      {data.workDuration.map((workDuration) => (
        <WorkDurationText
          workDuration={workDuration}
          key={`${workDuration.title} ${workDuration.fromDate.year}`}
        />
      ))}
      <Box className="job-description" w="90%">
        <JobDescriptions descriptions={data.descriptions} />
      </Box>
    </Container>
  );
};

const JobSection = () => {
  const [currentActive, setCurrentActive] = useState(myJobExp.length + 1);
  const {colorScheme} = useMantineColorScheme();
  return (
    <Box>
      <Title order={3}>Work Experience</Title>
      <Timeline
        mt={5}
        active={myJobExp.length - currentActive}
        reverseActive
        bulletSize={24}
        lineWidth={2}
      >
        {myJobExp.map((item: JobExprience, idx: number) => {
          const { hovered, ref } = useHover();
          const onHover = useCallback(() => {
            setCurrentActive(idx + 1);
          }, []);
          const onMouseOut = useCallback(() => {
            setCurrentActive(myJobExp.length + 1);
          }, []);
          return (
            <Timeline.Item
              bullet={hovered}
              onMouseOver={onHover}
              onMouseOut={onMouseOut}
              ref={ref}
              bg={hovered ? (colorScheme==='dark'?"customDarkBlueBg.9":"blue.0") : undefined}
              key={`${item.companyName}`}
            >
              <JobExprience data={item}></JobExprience>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default JobSection;
