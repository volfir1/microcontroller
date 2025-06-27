import { useState } from 'react';
import { Box, Card, Group, Title, Text, Switch, Button, Slider, ColorPicker, Stack, Grid } from '@mantine/core';
import { AppIcons } from '@/shared/components/icons/AppIcons';

export default function DeviceControls() {
  const { Snore, Fan, Pillow, Leg, Vibration, Light } = AppIcons; // Assuming these icons exist

  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [fanEnabled, setFanEnabled] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const [pillowHeight, setPillowHeight] = useState(50);
  const [legHeight, setLegHeight] = useState(50);
  const [lightColor, setLightColor] = useState('#ffffff');

  return (
    <Box p="xl">
      <Stack gap="xs" mb="xl">
        <Title order={2}>Device Controls</Title>
        <Text c="dimmed">Manage and test your hardware outputs.</Text>
      </Stack>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Snore size={28} />
                  <Title order={4}>Speaker / Alarm</Title>
                </Group>
                <Switch checked={alarmEnabled} onChange={(e) => setAlarmEnabled(e.currentTarget.checked)} />
              </Group>
              <Button disabled={!alarmEnabled}>Test Alarm</Button>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Fan size={28} />
                  <Title order={4}>Fan</Title>
                </Group>
                <Switch checked={fanEnabled} onChange={(e) => setFanEnabled(e.currentTarget.checked)} />
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group justify="space-between">
                <Group gap="sm">
                  <Vibration size={28} />
                  <Title order={4}>Bed Vibration</Title>
                </Group>
                <Switch checked={vibrationEnabled} onChange={(e) => setVibrationEnabled(e.currentTarget.checked)} />
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group gap="sm">
                <Pillow size={28} />
                <Title order={4}>Pillow Adjustment</Title>
              </Group>
              <Slider value={pillowHeight} onChange={setPillowHeight} />
              <Group justify="space-between">
                <Button onClick={() => setPillowHeight(0)}>Lower</Button>
                <Button onClick={() => setPillowHeight(100)}>Raise</Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group gap="sm">
                <Leg size={28} />
                <Title order={4}>Leg Adjustment</Title>
              </Group>
              <Slider value={legHeight} onChange={setLegHeight} />
              <Group justify="space-between">
                <Button onClick={() => setLegHeight(0)}>Lower</Button>
                <Button onClick={() => setLegHeight(100)}>Raise</Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={12}>
          <Card withBorder radius="md" p="xl">
            <Stack gap="md">
              <Group gap="sm">
                <Light size={28} />
                <Title order={4}>LED Strip Lights</Title>
              </Group>
              <ColorPicker value={lightColor} onChange={setLightColor} fullWidth />
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}