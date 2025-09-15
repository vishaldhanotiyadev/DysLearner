import { showAlert } from "./ShowAlert";
import { Alert, Linking } from "react-native";
import { HttpStatusCode } from "../utils/Constant";
import { Strings } from "../utils/Strings";

export interface ShowErrorAlertProps {
  isSuccess: boolean;
  message: string;
  result: any;
  statusCode: number;
}

export const showErrorHandler = (props: ShowErrorAlertProps) => {
  console.log("Proppppppp", props?.statusCode);
  if (props) {
    switch (props.statusCode) {
      case HttpStatusCode.ACCESS_DENIED:
        showAlert("", props?.message);
        break;

      case HttpStatusCode.BAD_REQUEST:
        showAlert("", props?.message);
        break;

      case HttpStatusCode.UNAUTHORIZED:
        Alert.alert(
          Strings.appName,
          props.message,
          [{ text: Strings.ok, onPress: () => tokenExpire() }],
          { cancelable: false }
        );

        break;

      case HttpStatusCode.SERVICE_UNAVAILABLE:
        showAlert("", props?.message);
        break;

      case HttpStatusCode.FORBIDDEN:
        showAlert(Strings.appName, Strings.forbidden);
        break;

      case HttpStatusCode.NOT_FOUND:
        showAlert(Strings.appName, Strings.noData);
        break;

      case HttpStatusCode.UPGRADE_REQUIRED:
        Alert.alert(
          Strings.appUpdateTitle,
          Strings.appUpdateDesc,

          [
            {
              text: Strings.updateLater,
              onPress: onUpdateLater,
              style: "cancel",
            },

            {
              text: Strings.updateNow,
              onPress: onUpdate,
              style: "default",
            },
          ],

          {
            cancelable: false,
            onDismiss: onUpdateLater,
          }
        );

        break;

      case HttpStatusCode.INTERNAL_SERVER_ERROR:
        showAlert(Strings.appName, Strings.internalServer);
        break;

      case HttpStatusCode.NOT_IMPLEMENTED:
        showAlert(Strings.appName, Strings.notImplemented);
        break;

      case HttpStatusCode.NETWORK_ERROR:
        console.log("NETWORK_ERROR");
        //  showAlert(Strings.appName, props?._response);
        break;

      default:
        showAlert(Strings.appName, Strings.pleaseTryAgain);
        break;
    }
  } else {
    console.log("====== No If No else", props);
    if (props && props.request) {
      showAlert(Strings.appName, props.request._response);
    } else {
      showAlert(Strings.appName, Strings.pleaseTryAgain);
    }
  }
};

const tokenExpire = async () => {
  // Write Token expire logic here
};

const onUpdate = () => {
  Linking.openURL("AppConstant.APP_URL").catch((err) =>
    console.log(err, "An error occurred while trying to link to the app store")
  );
};

const onUpdateLater = () => {
  console.log("Update Later", "An error occurred while updating the app");
};
