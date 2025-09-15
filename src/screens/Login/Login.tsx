import Button from "@components/Button/Button";
import { Box, Text } from "@components/Restyle";
import TextField from "@components/TextField/TextField";
import { LinearGradient } from "expo-linear-gradient";
import { Field, Formik } from "formik";
import { navigate } from "navigation/RootNavigation";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import loginSchema from "schemes/loginSchema";
import Images from "theme/images";
import { palette } from "theme/theme";
import LocalStorage from "utils/LocalStorage";
import { InferType } from "yup";

export type LoginFormValues = InferType<typeof loginSchema>;

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [savedValues, setSavedValues] = useState<LoginFormValues | null>(null);

  useEffect(() => {
    getStoredCredentials();
  }, []);

  const getStoredCredentials = async () => {
    try {
      const email = await LocalStorage.getData("email");
      const password = await LocalStorage.getData("password");
      if (email && password) {
        setRememberMe(true);
        setSavedValues({ email, password });
      }
    } catch (error) {
      console.log("Error fetching credentials:", error);
    }
  };

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(values);
  };

  return (
    <LinearGradient
      colors={[palette.gradient01, palette.gradient02, palette.gradient03]}
      style={styles.gradient}
      start={{ x: 0.2, y: 0.3 }}
      end={{ x: 1.1, y: 0.7 }}
    >
           <Button
                        variant="primary"
                        onPress={() => {
                          
                        }}
                        suffix={Images.AppIcon}
                        isSmall
                        height={45}
                      >
                        <Text variant="buttonLabel" color="white">
                          {"Login"}
                        </Text>
                      </Button>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box>
          <Box margin={"l"}>
            <Image style={styles.logo} source={Images.AppIcon} />
            <Text textAlign="center" variant="heading1" color="white">
              {"DysLearner"}
            </Text>
            <Text textAlign="center" variant="contentLabel" fontWeight={'600'} color="white" marginTop={'xs'}>
              {"Empowering Every Learner! 🌟"}
            </Text>
          </Box>
          <Box backgroundColor={"white"} padding={"m"} borderRadius={"m"}>
            <Text
            marginTop={'m'}
            marginBottom={'s'}
              textAlign="center"
              variant="heading3"

              color="black"
            >
              {"Welcome Back!"}
            </Text>
            <Text marginBottom={'xl'} textAlign="center" variant="heading7" color="slate">
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
                    placeholder="example@site.com"
                    textInputProps={{
                      autoCapitalize: "none",
                      autoCorrect: false,
                      keyboardType: "email-address",
                    }}
                  />

                  <Field
                    component={TextField}
                    label=""
                    placeholder="*******"
                    name="password"
                    isLarge
                    isRequired
                    textInputProps={{
                      autoCapitalize: "none",
                      autoCorrect: false,
                      secureTextEntry: !showPassword,
                    }}
                  />

               

                  <Box alignItems="center">
                    <Box width={'100%'} marginBottom="xl">
                      <Button
                        variant="gradient"
                        onPress={() => {
                          setTouched({ email: true, password: true });
                          if (isValid) handleSubmit();
                        }}
                        isSmall
                        height={35}
                      >
                        <Text variant="buttonLabel" color="white">
                          {"Login"}
                        </Text>
                      </Button>
                    </Box>
                    <Box width={'100%'} marginBottom="xl">
                 
                    </Box>

                    <Box flexDirection="row" marginBottom="xl">
                      <Text variant="label4">Don’t have an account? </Text>
                      <Text variant="label5" color="black">
                        Sign Up
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )}
            </Formik>
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
});

export default LoginScreen;
