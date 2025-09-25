import { ScrollView, SafeAreaView, StatusBar } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Box, Text } from "@components/Restyle"
import { PracticeQuestion } from "screens/PracticeQuestion/PracticeQuestion"
import { StudyMaterialCard } from "screens/StudyMaterialCard/StudyMaterialCard"
import { palette } from "theme/theme"
import Header from "@components/Header/Header"


const studyMaterials = [
  {
    icon: "▶",
    title: "Letter Sounds & Phonics Fun",
    subtitle: "5 min",
    points: 50,
    duration: "5 min",
  },
  {
    icon: "🎮",
    title: "Word Building Game",
    subtitle: "Build words using letter blocks",
    points: 30,
  },
  {
    icon: "📚",
    title: "Dyslexia-Friendly Stories",
    subtitle: "Read stories with special fonts",
    points: 40,
  },
  {
    icon: "🔢",
    title: "Number Recognition Fun",
    subtitle: "Learn numbers with colors & shapes",
    points: 35,
  },
  {
    icon: "✏️",
    title: "Trace & Write Letters",
    subtitle: "Practice letter formation",
    points: 25,
  },
]

const practiceQuestions = [
  {
    question: 'Which letters make the "b" sound?',
    options: ["b, d", "b, p", "p, o", "d, o"],
    correctAnswer: 0,
  },
  {
    question: "Count the shapes: 🔵🔵🔵",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    question: 'Which word rhymes with "cat"?',
    options: ["dog", "hat", "car", "sun"],
    correctAnswer: 1,
  },
  {
    question: "What comes next? 2, 4, 6, ?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
  },
]

export default function LearningPlan() {
  return (
<>
      <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {/* Header */}
          <LinearGradient
            colors={palette.headerGradient}
          start={{ x: 0.1, y: 0.3 }}
            end={{ x: 1.1, y: 1 }}
          >

          <Header title={'Learning Plan'} subTitle={'Reading & Math Activities'}/>
          <Box paddingBottom="l" paddingHorizontal="m">
          

            {/* Progress Bar */}
            <Box >
            
              <Box height={4} marginBottom="xs" backgroundColor="semiTransparent" borderRadius="s">
                <Box height={4} backgroundColor="white" borderRadius="s" width="0%" />
              </Box>
                <Text variant="subheader" fontSize={12} >
                0 of 9 completed (0%)
              </Text>
            </Box>
          </Box>
          </LinearGradient>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {/* Study Materials Section */}
            <Box paddingHorizontal="m">
              <Box flexDirection="row" alignItems="center" marginVertical="m">
                <Text fontSize={18} marginRight="s">
                  📚
                </Text>
                <Text variant="body" fontWeight="600" fontSize={18} color="black">
                  Study Materials
                </Text>
              </Box>

              {studyMaterials.map((material, index) => (
                <StudyMaterialCard
                  key={index}
                  icon={material.icon}
                  title={material.title}
                  subtitle={material.subtitle}
                  points={material.points}
                  duration={material.duration}
                  onPress={() => console.log(`Starting ${material.title}`)}
                />
              ))}
            </Box>

            {/* Practice Questions Section */}
            <Box paddingHorizontal="l" marginBottom="l">
              <Box flexDirection="row" alignItems="center" marginBottom="m">
                <Text fontSize={18} marginRight="s">
                  🔒
                </Text>
                <Text variant="body" fontWeight="600" fontSize={18} color="black">
                  Practice Questions
                </Text>
              </Box>

              {practiceQuestions.map((question, index) => (
                <PracticeQuestion
                  key={index}
                  questionNumber={index + 1}
                  question={question.question}
                  options={question.options}
                  correctAnswer={question.correctAnswer}
                />
              ))}
            </Box>

            <Box height={50} />
          </ScrollView>
        </SafeAreaView>
      </>
  )
}
