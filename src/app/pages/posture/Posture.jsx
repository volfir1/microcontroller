import { useState } from 'react';
import { Box, Card, Group, Title, Text, Badge, Stack, Grid, RingProgress, ThemeIcon, Center } from '@mantine/core';
import { AppIcons } from '@/shared/components/icons/AppIcons';

export default function Posture() {
  const { Position, Foot } = AppIcons;

  // Mock data - in a real application, this would come from sensors/backend
  const [position, setPosition] = useState('Side');
  const [neckAngle, setNeckAngle] = useState(15);
  const [footElevation, setFootElevation] = useState(10);
  const [postureStatus, setPostureStatus] = useState('Good');
  const [lastChange, setLastChange] = useState('Rolled from back to side at 2:03 AM');
  const [autoResponse, setAutoResponse] = useState('Pillow Adjusted Due to Bad Posture');

  const getPostureColor = () => {
    if (postureStatus === 'Good') return 'green';
    if (postureStatus === 'Bad') return 'orange';
    return 'red';
  };

  return (
    <Box p="xl">
      <Stack gap="xs" mb="xl">
        <Title order={2}>Posture & Position</Title>
        <Text c="dimmed">Real-time analysis of your sleep posture.</Text>
      </Stack>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Card withBorder radius="md" p="xl" h="100%">
            <Center style={{ height: '100%' }}>
              <Text c="dimmed">Camera Feed (Not available)</Text>
            </Center>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Stack gap="xl">
            <Card withBorder radius="md" p="xl">
              <Group justify="space-between">
                <Group gap="sm">
                  <ThemeIcon size="lg" variant="light">
                    <Position size={24} />
                  </ThemeIcon>
                  <Title order={4}>Current Position</Title>
                </Group>
                <Badge size="lg">{position}</Badge>
              </Group>
            </Card>

            <Card withBorder radius="md" p="xl">
              <Group justify="space-between">
                <Title order={4}>Posture Status</Title>
                <Badge size="lg" color={getPostureColor()}>{postureStatus}</Badge>
              </Group>
            </Card>

            <Card withBorder radius="md" p="xl">
              <Title order={4} mb="md">Neck Angle</Title>
              <Center>
                <RingProgress
                  size={150}
                  thickness={15}
                  roundCaps
                  sections={[{ value: (neckAngle / 45) * 100, color: getPostureColor() }]}
                  label={<Text c={getPostureColor()} fw={700} ta="center" size="xl">{neckAngle}°</Text>}
                />
              </Center>
            </Card>

            <Card withBorder radius="md" p="xl">
              <Group justify="space-between">
                <Group gap="sm">
                  <ThemeIcon size="lg" variant="light">
                    <Foot size={24} />
                  </ThemeIcon>
                  <Title order={4}>Foot Elevation</Title>
                </Group>
                <Badge size="lg">{footElevation}°</Badge>
              </Group>
            </Card>
          </Stack>
        </Grid.Col>

        <Grid.Col span={12}>
          <Card withBorder radius="md" p="xl">
            <Title order={4} mb="md">Event Log</Title>
            <Stack gap="xs">
              <Text>Last Detected Change: {lastChange}</Text>
              <Text>Auto Response Triggered: {autoResponse}</Text>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
