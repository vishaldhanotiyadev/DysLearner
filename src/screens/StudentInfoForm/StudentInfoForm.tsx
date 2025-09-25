import Images from "theme/images";
import { Box, Text } from "@components/Restyle";
import TextField from "@components/TextField/TextField";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import {  Image } from "react-native";
import loginSchema from "schemes/loginSchema";
import { palette } from "theme/theme";
import { LinearGradient } from "expo-linear-gradient";

const initialValues: any = {
  email: "",
  password: "",
};

export const StudentInfoForm: React.FC = () => {
  const [savedValues, setSavedValues] = useState<any | null>(null);

  return (
    <Box
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
      marginBottom="m"
    >
      <Box flexDirection="row" alignItems="center" marginBottom="m">
        <Box
          width={45}
          height={45}
          alignItems="center"
          marginRight={"xxs"}
          justifyContent="center"
        >
          <LinearGradient
            colors={palette.headerGradient}
            style={{ padding: 8, borderRadius: 20 }}
          >
            <Image
              style={{ width: 22, height: 22, alignSelf: "center" }}
              source={Images.PeopleIcon}
            />
          </LinearGradient>
        </Box>
        <Text variant="body" fontWeight="600">
          Student Information
        </Text>
      </Box>

      <Box>
        <Formik
          enableReinitialize
          initialValues={savedValues || initialValues}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // handleSubmit(values);
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
                name="name"
                isLarge
                isRequired
                placeholder="Student Name"
                textInputProps={{
                  autoCapitalize: "none",
                  autoCorrect: false,
                  keyboardType: "default",
                }}
              />

              <Field
                component={TextField}
                label=""
                placeholder="Age"
                name="age"
                isLarge
                isRequired
                textInputProps={{
                  autoCapitalize: "none",
                  autoCorrect: false,
                  // secureTextEntry: !showPassword,
                }}
              />
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
