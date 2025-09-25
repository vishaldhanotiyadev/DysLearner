import { ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Box, Text } from "@components/Restyle";
import StudentCard from "screens/StudentCard/StudentCard";
import { navigate } from "@navigation/RootNavigation";
import Header from "@components/Header/Header";
import Button from "@components/Button/Button";
import { palette } from "theme/theme";

const studentsData = [
  {
    name: "Aarav Patel",
    age: 8,
    isActive: true,
    skills: {
      reading: { phonics: 4, comprehension: 3, fluency: 5 },
      writing: { spelling: 3, handwriting: 2, composition: 4 },
      math: { numbers: 5, operations: 3, problemSolving: 4 },
    },
  },
  {
    name: "Priya Sharma",
    age: 7,
    isActive: true,
    skills: {
      reading: { phonics: 3, comprehension: 4, fluency: 3 },
      writing: { spelling: 4, handwriting: 3, composition: 2 },
      math: { numbers: 3, operations: 4, problemSolving: 3 },
    },
  },
  {
    name: "Rohan Kumar",
    age: 9,
    isActive: true,
    skills: {
      reading: { phonics: 5, comprehension: 5, fluency: 4 },
      writing: { spelling: 4, handwriting: 3, composition: 5 },
      math: { numbers: 4, operations: 5, problemSolving: 4 },
    },
  },
];

export default function MyStudent() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header
        gradient={palette.myStudentHeader}
        title="My Students"
        subTitle="Manage your student's progress"
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}

        <ScrollView
          style={{ flex: 1, marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Box paddingHorizontal="l">
            {/* Add New Student Button */}
            <Box width={"100%"} marginBottom="m">
              <Button
                gradientColors={palette.addMemberGradient01}
                variant="gradient"
                onPress={() => navigate("AddNewStudent")}
                isSmall
                height={35}
              >
                <Text variant="buttonLabel" fontWeight={"bold"} color="white">
                  {"+     Add New Student"}
                </Text>
              </Button>
            </Box>
            {/* Students List */}
            {studentsData.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                age={student.age}
                isActive={student.isActive}
                skills={student.skills}
                onPress={() => console.log(`Selected ${student.name}`)}
              />
            ))}
          </Box>

          <Box height={50} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
