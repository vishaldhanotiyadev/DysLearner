import {
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "@components/Restyle";
import React from "react";
import { LeaderboardCard } from "screens/LeaderboardCard/LeaderboardCard";
import { SkillSection } from "screens/SkillSection/SkillSection";
import Header from "@components/Header/Header";
import { palette } from "theme/theme";

const readingSkills = [
  { icon: "📖", title: "Phonics", rating: 4 },
  { icon: "🧠", title: "Comprehension", rating: 3 },
  { icon: "🗣️", title: "Fluency", rating: 4 },
];

const writingSkills = [
  { icon: "✏️", title: "Spelling", rating: 3 },
  { icon: "✍️", title: "Handwriting", rating: 2 },
  { icon: "📝", title: "Composition", rating: 3 },
];

const mathSkills = [
  { icon: "🔢", title: "Numbers", rating: 4 },
  { icon: "➕", title: "Operations", rating: 3 },
  { icon: "🧮", title: "Problem Solving", rating: 2 },
];

const leaderboardData = [
  { icon: "🏆", title: "Reading Hero", points: 1850, rank: 1 },
  { icon: "🧙‍♂️", title: "Word Wizard", points: 1620, rank: 2 },
  { icon: "🧮", title: "Math Master", points: 1450, rank: 3 },
  { icon: "🏆", title: "Reading Hero", points: 1850, rank: 4 },
  { icon: "🧙‍♂️", title: "Word Wizard", points: 1620, rank: 5 },
  { icon: "🧮", title: "Math Master", points: 1450, rank: 6 },
];

export default function StudentDashboard() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <Header
          gradient={palette.guestHeader}
          title="Hi Aarav! 👋"
          subTitle="Ready to learn today?"
        />

        <ScrollView
          style={{ flex: 1, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Points Card */}
          <Box paddingHorizontal="m" marginBottom="l">
            <LinearGradient
              colors={palette.pointGradient}
              style={{
                borderRadius: 16,
                padding: 20,
              }}
            >
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      justifyContent="center"
                      alignItems="center"
                      padding={"s"}
                      borderRadius={"xl"}
                      backgroundColor={"semiTransparent"}
                    >
                      <Text fontSize={18}>🏆</Text>
                    </Box>
                    <Box flexDirection="column" marginLeft="s">
                      <Text variant="subheader" fontWeight="600">
                        Your Points
                      </Text>
                      <Text variant="subheader" fontSize={14}>
                        Keep it up!
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box alignItems="flex-end">
                  <Text variant="header" fontSize={32}>
                    1250
                  </Text>
                  <Text variant="subheader" fontSize={14}>
                    Total Points
                  </Text>
                </Box>
              </Box>
            </LinearGradient>
          </Box>

          {/* Leaderboard */}
          <Box paddingHorizontal="m" marginBottom="l">
            <Box flexDirection="row" alignItems="center" marginBottom="m">
              <Text fontSize={20} marginRight="s">
                🏆
              </Text>
              <Text variant="body" fontWeight="600" fontSize={18}>
                Leaderboard
              </Text>
              <Text fontSize={16} marginLeft="s">
                ⭐✨
              </Text>
            </Box>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Box flexDirection="row">
                {leaderboardData.map((item, index) => (
                  <LeaderboardCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    points={item.points}
                    rank={item.rank}
                  />
                ))}
              </Box>
            </ScrollView>

            <Text
              variant="caption"
              textAlign="center"
              marginTop="m"
              fontSize={14}
              color="textSecondary"
            >
              Keep learning to climb higher! 🚀
            </Text>
          </Box>

          {/* Learning Skills */}
          <Box paddingHorizontal="m" marginBottom="l">
            <Box flexDirection="row" alignItems="center" marginBottom="l">
              <Text fontSize={20} marginRight="s">
                🎯
              </Text>
              <Text variant="body" fontWeight="600" fontSize={18}>
                Your Learning Skills
              </Text>
            </Box>

            <SkillSection
              icon="📚"
              title="Reading"
              skills={readingSkills}
              backgroundColor="#3B82F6"
            />

            <SkillSection
              icon="✍️"
              title="Writing"
              skills={writingSkills}
              backgroundColor="#10B981"
            />

            <SkillSection
              icon="🧮"
              title="Math"
              skills={mathSkills}
              backgroundColor="#F97316"
            />
          </Box>

          <Box height={50} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
