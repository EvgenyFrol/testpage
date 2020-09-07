import '../components/BaseBanner/BaseBanner';
import '../components/BaseHeader/BaseHeader';
import '../components/BaseMenu/BaseMenu';
import '../components/BaseCounter/BaseCounter';
import '../components/BaseProjects/BaseProjects';
import '../components/BaseSend/BaseSend';
import '../components/BaseWork/BaseWork';
import '../components/BaseSlider/BaseSlider';
import '../components/BaseAnswers/BaseAnswers';
import '../components/BasePartners/BasePartners';
import '../components/BaseComments/BaseComments';
import '../components/BaseFeedback/BaseFeedback';
import '../components/BaseContacts/BaseContacts';
import '../components/BaseFooter/BaseFooter';
import '../components/BaseSendPopup/BaseSendPopup';
import '../components/BaseFeedbackPopup/BaseFeedbackPopup';

var callScript = document.createElement('script');
callScript.async = true;
callScript.type = 'text/javascript';
callScript.innerHTML = 'var phone = jQuery(.form_uznat_top #phone).val(); try if (!!phone) {phone = phone.replace(/[^0-9]/gim, " "); console.log(phone); if (phone.length==11) window.ctw.createRequest("secondForm82", phone, [], function(success, data){ console.log(success, data) } ); //Callback  } } catch (e) { }';
var lastElem = document.body.lastChild;
var elem = document.body.insertBefore(callScript, lastElem);


