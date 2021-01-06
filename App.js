import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './Src/SplashScreen/SplashScreen';
import Login from './Src/Login/Login';
import SignUpUser from './Src/SignUpUser/SignUpUser';
import SigupAsKitchenOrUser from './Src/SigupAsKitchenOrUser/SigupAsKitchenOrUser';
import SignUpKitchen from './Src/SignUpKitchen/SignUpKitchen';
import ForgetPassword from './Src/ForgetPassword/ForgetPassword';
import ForgetPasswordVerification from './Src/ForgetPassword/ForgetPasswordVerification';
import ResetPassword from './Src/ForgetPassword/ResetPassword';
import KitchenDashboard from './Src/Kitchen/KitchenDashboard/KitchenDashboard';
import AddADish from './Src/Kitchen/AddADish/AddADish';
import AddADeal from './Src/Kitchen/AddADeal/AddADeal';
import MainChatRoom from './Src/Kitchen/MainChatRoom/MainChatRoom';
import Chat from './Src/Kitchen/Chat/Chat';
import NavBar from './Component/NavBar';
import ChatRoomCard from './Component/ChatRoomCard';
import Review from './Src/Kitchen/Review/Review';
import ReviewCard from './Component/ReviewCard';
import OrderScreen from './Src/Kitchen/Orders/OrderScreen';
import CancelOrder from './Src/Kitchen/Orders/CancelOrder/CancelOrder';
import {Modal} from 'react-native';
import UserDashboard from './Src/User/UserDashboard/UserDashboard';
import DealsCard from './Component/DealsCard';
import KitchenCard from './Component/KitchenCard';
import KitchenMenuViewForUser from './Src/User/UserViewOfKitchenMenu/KitchenMenuViewForUser';
import ExpandedMenuOfKitchen from './Src/User/ExpandedMenuOfKitchen/ExpandedMenuOfKitchen';
import CheckOutCashOnDeliveryOrCard from './Src/User/CheckOutCashOnDeliveryOrCard/CheckOutCashOnDeliveryOrCard';
import ExtraInstructionToRider from './Src/User/ExtraInstructionToRider/ExtraInstructionToRider';
import OrderConformation from './Src/User/OrderConformation/OrderConformation';
import OrderConfirmed from './Src/User/OrderConfirmed/OrderConfirmed';
import CancelOrderUser from './Src/User/CancelOrderUser/CancelOrderUser';
import DrawerNav from './Src/DrawerNav/DrawerNav';

const navigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    DrawerNav: DrawerNav,
    Login: Login,
    SignUpUser: SignUpUser,
    SigupAsKitchenOrUser: SigupAsKitchenOrUser,
    SignUpKitchen: SignUpKitchen,
    ForgetPassword: ForgetPassword,
    ForgetPasswordVerification: ForgetPasswordVerification,
    ResetPassword: ResetPassword,
    KitchenDashboard: KitchenDashboard,
    AddADish: AddADish,
    AddADeal: AddADeal,
    Chat: Chat,
    NavBar: NavBar,
    ReviewCard: ReviewCard,
    ChatRoomCard: ChatRoomCard,
    MainChatRoom: MainChatRoom,
    Review: Review,
    ReviewCard: ReviewCard,
    OrderScreen: OrderScreen,
    CancelOrder: CancelOrder,
    Modal: Modal,
    UserDashboard: UserDashboard,
    DealsCard: DealsCard,
    kitchenCard: KitchenCard,
    KitchenMenuViewForUser: KitchenMenuViewForUser,
    ExpandedMenuOfKitchen: ExpandedMenuOfKitchen,
    CheckOutCashOnDeliveryOrCard: CheckOutCashOnDeliveryOrCard,
    ExtraInstructionToRider: ExtraInstructionToRider,
    OrderConformation: OrderConformation,
    OrderConfirmed: OrderConfirmed,
    CancelOrderUser: CancelOrderUser,
  },
  {
    initialRouteName: 'SplashScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(navigator);
