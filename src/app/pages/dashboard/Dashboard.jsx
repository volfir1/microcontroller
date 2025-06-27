import {
  Box,
  Card,
  Group,
  Title,
  Badge,
  Text,
  Progress,
  Grid,
  Stack,
} from "@mantine/core";
import { AppIcons } from "@/shared/components/icons/AppIcons";

export default function Dashboard() {
  const { Sleep, Heart, Breath, Snore, Weight, Position } = AppIcons;

  return (
    <Box p="xl">
      <Stack gap="xs" mb="xl">
        <Title order={2}>Sleep Monitoring Dashboard</Title>
        <Text c="dimmed">Welcome to your dashboard!</Text>
      </Stack>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Sleep size={28} color="violet" />
                  <Title order={4}>Current Sleep Status</Title>
                </Group>
                <Badge color="lime">Sleeping</Badge>
              </Group>
              <Stack gap="xs">
                <Text size="sm">Snore Intensity</Text>
                <Progress value={91} color="violet" size="lg" radius="sm" />
                <Text size="xs" c="dimmed" ta="right">
                  High Level (91%)
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md" align="center">
              <Group gap="sm">
                <Heart size={28} color="red" />
                <Title order={4}>Heart Rate</Title>
              </Group>
              <Text size="4rem" fw={700}>
                62
              </Text>
              <Badge color="green" variant="light">
                BPM - Normal Range
              </Badge>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Breath size={28} color="orange" />
                  <Title order={4}>Breathing Pattern</Title>
                </Group>
                <Badge color="lime">Normal</Badge>
              </Group>
              <Stack gap="xs">
                <Text size="sm">Breathing Intensity</Text>
                <Progress value={60} color="orange" size="lg" radius="sm" />
                <Text size="xs" c="dimmed" ta="right">
                  Steady rhythm detected
                </Text>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md">
              <Group gap="sm">
                <Snore size={28} color="cyan" />
                <Title order={4}>Snore Detection</Title>
              </Group>
              <Stack gap="xs">
                <Group justify="space-between">
                  <Text size="sm">Current Status:</Text>
                  <Badge color="cyan">3h 15m</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm">Last Detected:</Text>
                  <Text size="sm">2 mins ago</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm">Frequency (1hr):</Text>
                  <Text size="sm">23 Episodes</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md" align="center">
              <Group gap="sm">
                <Weight size={28} color="gray" />
                <Title order={4}>Body Pressure</Title>
              </Group>
              <Text size="4rem" fw={700}>
                70
              </Text>
              <Badge color="blue" variant="light">
                kg - Person in bed
              </Badge>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Stack gap="md">
              <Group gap="sm">
                <Position size={28} color="pink" />
                <Title order={4}>Body Position</Title>
              </Group>
              <Stack gap="xs">
                <Group justify="space-between">
                  <Text size="sm">Position:</Text>
                  <Text size="sm">Side</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm">Neck Angle:</Text>
                  <Text size="sm">15°</Text>
                </Group>
              </Stack>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}