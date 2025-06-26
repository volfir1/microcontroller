import {
  Box,
  Button,
  Card,
  Group,
  Title,
  Badge,
  Text,
  Progress,
  Flex,
  Grid,
  Divider,
  Stack,
} from "@mantine/core";
import { AppIcons } from "@/shared/components/icons/AppIcons";

export default function Dashboard() {
  const SleepIcon = AppIcons.Sleep;
  const HeartIcon = AppIcons.Heart;
  const BreathIcon = AppIcons.Breath;
  const SnoreIcon = AppIcons.Snore;
  const WeightIcon = AppIcons.Weight;
  const BodyIcon = AppIcons.Position;
  return (
    <>
      {/* Title */}
      <Box className="grid-rows-2 ml-10">
        <h1 className="text-xl font-bold ">
          Sleep Monitoring Dashboard

         
        </h1>
         <p className="text-sm">Welcome to your dashboard!</p>
      </Box>
      {/* Cards */}
      <Grid className="p-10" gutter="md">
        {/* Sleep Intensity */}
        <Grid.Col span={4}>
          <Card
            span={4}
            className="flex flex-col gap-3 shadow-2xl rounded-2xl"
            bg={"white"}
            padding={30}
            align="stretch"
            shadow="md"
            h='100%'
          >
            <Card.Section h={6} bg="violet" radius="md" />
            <Group justify="center">
              <SleepIcon size={40} color="violet" />
              <Title order={2} className="relative ">
                Current Sleep Status
              </Title>
            </Group>

            <Badge size="xs" color="lime">
              Sleeping
            </Badge>

            <Group>
              <Text size="sm"> Snore Intensity </Text>
              <Progress
                radius="md"
                value={50}
                size="md"
                w="100%"
                color="violet"
              />{" "}
              <Text size="sm"> High Level (91%)</Text>
            </Group>
          </Card>
        </Grid.Col>

        {/* Heart Rate */}
        <Grid.Col span={4} align="stretch">
          <Card
            span={4}
            className="flex flex-col gap-3 shadow-2xl rounded-3xl"
            bg={"white"}
            padding={30}
            shadow="md"
            h='100%'
          >
            <Card.Section h={6} bg="red" radius="md" />
            <Group justify="center">
              <HeartIcon size={40} color="red" />
              <Title order={2} className="relative">
                Heart Rate
              </Title>
            </Group>
            <Flex justify="center" align="center" h={100}>
              <Title order={1}>62</Title>
            </Flex>
            <Flex justify="center" align="center" h={20}>
              <Text size="md">BPM - Normal Range</Text>
            </Flex>
          </Card>
        </Grid.Col>

        {/* Breathing Pattern */}
       <Grid.Col span={4}>
          <Card
            className="flex flex-col gap-3 shadow-2xl rounded-2xl pt-3"
            bg={"white"}
            padding={30}
            shadow="md"
            h='100%'
            
          >
            <Card.Section h={6} bg="orange" radius="md"  />
            <Group justify="center" className="pt-0">
              <BreathIcon size={40} color="orange" />
              <Title order={2} className="relative">
                Breathing Pattern
              </Title>
            </Group>

            <Badge size="xs" color="lime">
              Normal
            </Badge>

            <Stack gap="xs">
              <Text size="sm">Breathing Intensity</Text>
              <Progress
                radius="md"
                value={60}
                size="md"
                color="orange"
              />
              <Text size="sm">Steady rhythm detected</Text>
            </Stack>
          </Card>
       </Grid.Col>

        {/* Snore Detection */}
        <Grid.Col span={4} align="stretch">
          <Card
            span={4}
            className="flex  gap-3 shadow-2xl rounded-2xl"
            bg={"white"}
            padding={30}
            shadow="md"
            h='100%'
          >
            <Card.Section h={6} bg="cyan" radius="md" />
            <Group justify="center">
              <SnoreIcon size={40} color="cyan" />
              <Title order={2} className="relative ">
                Snore Detection
              </Title>
            </Group>

            <Stack>
              <Group justify="space-between">
                <Text size="sm">Current Status: </Text>
                <Badge color="cyan">3H 15M</Badge>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text size="sm">Last Detected: </Text>
                <Text>2 mins ago </Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text size="sm">Frequency(1hr): </Text>
                <Text>23 Episodes </Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

    {/* Weight Sennsor */}
        <Grid.Col span={4} align="stretch">
          <Card
            span={4}
            className="flex  gap-3 shadow-2xl rounded-2xl"
            bg={"white"}
            padding={30}
            shadow="md"
            h='100%'
          >
            <Card.Section h={6} bg="gray" radius="md" />
            <Group justify="center">
              <WeightIcon size={40} color="gray" />
              <Title order={2} className="relative ">
                Body Pressure
              </Title>
            </Group>

            <Stack justify="center" className="flex flex-col">
              <Flex justify="center" align="center" h={100}>
                <Title order={1}>70</Title>
              </Flex>
              <Flex justify="center" align="center" h={20}>
                <Text size="md">kg - Person in bed</Text>
              </Flex>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={4} align="stretch">
          <Card
            span={4}
            className="flex  gap-3 shadow-2xl rounded-2xl"
            bg={"white"}
            padding={30}
            shadow="md"
            h='100%'
          >
            <Card.Section h={6} bg="pink" radius="md" />
            <Group justify="center">
              <BodyIcon size={40} color="pink" />
              <Title order={2} className="relative ">
               Body Position
              </Title>
            </Group>

            <Stack className="mt-5">
              <Group justify="space-between">
                <Text size="sm">Position: </Text>
                <Text>Side </Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text size="sm">Neck Angle: </Text>
                <Text>15°</Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}
