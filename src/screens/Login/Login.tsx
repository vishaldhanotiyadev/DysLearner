import Button from "@components/Button/Button";
import { Box, Text } from "@components/Restyle";
import TextField from "@components/TextField/TextField";
import { LinearGradient } from "expo-linear-gradient";
import { Field, Formik } from "formik";
import { navigate } from "navigation/RootNavigation";
import React, {  useState } from "react";
import { ScrollView,  Image, StyleSheet, TouchableOpacity } from "react-native";
import loginSchema from "schemes/loginSchema";
import Images from "theme/images";
import { palette } from "theme/theme";
import { InferType } from "yup";

export type LoginFormValues = InferType<typeof loginSchema>;

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowSignUp, setIsShowSignUp] = useState<boolean>(false);
  const [savedValues, setSavedValues] = useState<LoginFormValues | null>(null);


  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(values);
  };

  return (
    <LinearGradient
      colors={palette.loginGradient}
      style={styles.gradient}
      start={{ x: 0.2, y: 0.3 }}
      end={{ x: 1.1, y: 0.7 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box>
          <Box margin={"l"}>
            <Image style={styles.logo} source={Images.AppIcon} />
            <Text textAlign="center" variant="heading1" color="white">
              {"DysLearner"}
            </Text>
            <Text
              textAlign="center"
              variant="label7"
              fontWeight={"600"}
              color="white"
              marginTop={"xs"}
            >
              {"Empowering Every Learner! 🌟"}
            </Text>
          </Box>
          <Box backgroundColor={"white"} padding={"m"} borderRadius={16}>
            <Text
              marginTop={"m"}
              marginBottom={"s"}
              textAlign="center"
              variant="heading3"
              color="black"
            >
              {"Welcome Back!"}
            </Text>
            <Text
              marginBottom={"xl"}
              textAlign="center"
              variant="heading7"
              color="slate"
            >
              {"Sign in to continue"}
            </Text>

            <Formik
              enableReinitialize
              initialValues={savedValues || initialValues}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
                setSubmitting(false);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setTouched,
                isValid,
              }) => (
                <Box>
                  <Field
                    component={TextField}
                    label=""
                    name="email"
                    isLarge
                    isRequired
                    placeholder="Email"
                    textInputProps={{
                      autoCapitalize: "none",
                      autoCorrect: false,
                      keyboardType: "email-address",
                    }}
                  />

                  <Field
                    component={TextField}
                    label=""
                    placeholder="Password"
                    name="password"
                    isLarge
                    isRequired
                    textInputProps={{
                      autoCapitalize: "none",
                      autoCorrect: false,
                      secureTextEntry: !showPassword,
                    }}
                  />
                 {isShowSignUp && <Field
                    component={TextField}
                    label=""
                    placeholder="Confirm Password"
                    name="password"
                    isLarge
                    isRequired
                    textInputProps={{
                      autoCapitalize: "none",
                      autoCorrect: false,
                      secureTextEntry: !showPassword,
                    }}
                  />}

                  <Box alignItems="center">
                    <Box width={"100%"} marginBottom="xl">
                      <Button
                      gradientColors={palette.loginButtonGradient}
                        variant="gradient"
                        onPress={() => {
                          setTouched({ email: true, password: true });
                          if (isValid) { navigate('MyStudent'); handleSubmit(); }
                        }}
                        isSmall
                        height={35}
                      >
                        <Text variant="buttonLabel" fontWeight={"bold"} color="white">
                          {isShowSignUp?"Create Account":"Sign In"}
                        </Text>
                      </Button>
                    </Box>

                    <Box flexDirection="row" marginBottom="s">
                      <TouchableOpacity onPress={() => setIsShowSignUp(!isShowSignUp)}>
                      <Text color={'blueMagenta'} variant="label7">Don’t have an account? Sign Up</Text>
                      </TouchableOpacity>
                    </Box>
                  </Box>
                </Box>
              )}
            </Formik>
          </Box>
          <Box
            flexDirection={"row"}
            justifyContent="space-around"
            marginTop="l"
          >
            <Box width={"40%"} marginBottom="l">
              <Button
                variant="icon"
                onPress={() => {navigate('StudentDashboard')}}
                prefix={<Image style={styles.logos} source={Images.UserIcon} />}
                isSmall
                height={40}
              >
                <Text variant="label5" color="white" fontWeight={"bold"}>
                  {"I'm a Student"}
                </Text>
              </Button>
            </Box>
          </Box>
          <Box flexDirection={"row"} alignItems={'center'} justifyContent="space-evenly">
            <Box
              alignItems={'center'}
              borderRadius={16}
              padding={"s"}
            >
              <Box flexDirection={"row"} alignItems={'center'} marginBottom={'xs'}>
                <Image style={styles.logos} source={Images.StarIcon} />
                <Text variant="buttonLabel" color="white">
                  {" 1000+"}
                </Text>
              </Box>
              <Text variant="buttonLabel" color="white">
                {"Happy Learner's"}
              </Text>
            </Box>
            <Box alignItems={'center'} >
              <Box flexDirection={"row"} alignItems={'center'} marginBottom={'xs'}>
                <Image style={styles.logos} source={Images.BookIcon} />
                <Text variant="buttonLabel" color="white" >
                  {"  3"}
                </Text>
              </Box>
              <Text variant="buttonLabel" color="white">
                {"Learning Areas"}
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 10,
    alignSelf: "center",
  },
  logos: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
