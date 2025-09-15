// import Avatar from "@components/Avatar/Avatar";
// import Icon from "@components/Icon/Icon";
// import { Box, Text } from "@components/Restyle";
// import { navigate } from "navigation/RootNavigation";
// import React from "react";
// import { Image, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { logoutUser } from "utils/Utils";
// export default function Header() {
//   return (
//     <SafeAreaView>
//       <Box
//         backgroundColor={"white"}
//         flexDirection="row"
//         justifyContent="space-between"
//         alignItems="center"
//         padding="s"
//       >
//         {/* Logo */}
//         <Box flexDirection="row" alignItems="center">
//           <Image
//             source={require("./../../../assets/images/app-name.png")} // Replace with your logo
//             style={{ width: 200, height: 30, marginRight: 4 }}
//           />
//         </Box>

       

//         {/* Right Side */}
//         <Box flexDirection="row" alignItems="center">
//           {/* Notification with badge */}
//           <TouchableOpacity onPress={() => navigate("Notifications")}>
//             <Box marginRight="m">
//               <Icon name={"Bell"} variant="xl" />

//               <Box
//                 position="absolute"
//                 top={-6}
//                 right={-8}
//                 borderRadius="s"
//                 backgroundColor={"apexPrimary"}
//                 paddingHorizontal="xs"
//               >
//                 <Text variant="label7" color="white">
//                   8
//                 </Text>
//               </Box>
//             </Box>
//           </TouchableOpacity>
//           {/* Avatar */}
//           <TouchableOpacity onPress={() => logoutUser()}>
//             <Avatar
//               uri={"https://randomuser.me/api/portraits/men/75.jpg"}
//               size="medium"
//             />
//           </TouchableOpacity>
//         </Box>
//       </Box>
//     </SafeAreaView>
//   );
// }
