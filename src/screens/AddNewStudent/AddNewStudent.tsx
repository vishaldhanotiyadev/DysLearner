import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Box, Text } from "@components/Restyle";
import { StudentInfoForm } from "screens/StudentInfoForm/StudentInfoForm";
import { SkillAssessment } from "screens/SkillAssessment/SkillAssessment";
import { palette } from "theme/theme";
import Header from "@components/Header/Header";
import Button from "@components/Button/Button";

export default function AddNewStudent() {
  const readingSkills = [
    { name: "Phonics", icon: "🔤" },
    { name: "Comprehension", icon: "🧠" },
    { name: "Fluency", icon: "🗣️" },
  ];

  const writingSkills = [
    { name: "Spelling", icon: "📝" },
    { name: "Handwriting", icon: "✍️" },
    { name: "Composition", icon: "📖" },
  ];

  const mathSkills = [
    { name: "Numbers", icon: "🔢" },
    { name: "Operations", icon: "➕" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          gradient={palette.myStudentHeader}
          title="Add New Student"
          subTitle="Assess dyslexia support needs"
        />

        <ScrollView
          style={{ flex: 1, marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Box paddingHorizontal="l">
            <StudentInfoForm />

            <SkillAssessment
              title="Reading"
              icon="📚"
              skills={readingSkills}
              iconColor="blue"
            />

            <SkillAssessment
              title="Writing"
              icon="✏️"
              skills={writingSkills}
              iconColor="green"
            />

            <SkillAssessment
              title="Math"
              icon="🔢"
              skills={mathSkills}
              iconColor="orange01"
            />

            <TouchableOpacity onPress={() => console.log("Add student")}>
              <Box width={"100%"} marginBottom="xl">
                <Button
                  gradientColors={palette.loginButtonGradient}
                  variant="gradient"
                  onPress={() => {}}
                  isSmall
                  height={35}
                >
                  <Text variant="buttonLabel" fontWeight={"bold"} color="white">
                    {"Add Student"}
                  </Text>
                </Button>
              </Box>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
