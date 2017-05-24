/* eslint-disable */

const _ = require("lodash");
var getLMCList = function(crc) {
  for (var a = 0; a < crc.lmcs.length; a++) {
    for (var b = 0; b < crc.lmcList.length; b++) {
      if (crc.lmcs[a] === crc.lmcList[b].value) {
        crc.lmcList[b].ticked = true;
      }
    }
  }
  return crc;
};

var validateTab2 = function() {
  var isTab2CurrentInvalid = true;
  var isTab2PreviousInvalid = true;
  for (var property in me.questions) {
    if (me.questions.hasOwnProperty(property)) {
      var question = me.questions[property];
      var prefixProperty;
      if (question.tabId === 2) {
        prefixProperty = property.split("_");
        if (question.answer.answerContent) {
          if (prefixProperty[0] === "r13CurrentOffence") {
            isTab2CurrentInvalid = false;
          } else if (prefixProperty[0] === "r13PreviousOffence") {
            isTab2PreviousInvalid = false;
          }
        }
      }
    }
  }
  return isTab2CurrentInvalid || isTab2PreviousInvalid || true;
};

function checkTab(questions, point) {
  for (let question of questions) {
    if (question.tabId === 2 && question.answer.answerContent) {
      return _.findKey(question, questions).split("_")[0] === point
        ? false
        : true;
    }
  }
}

var validateTab3 = function(questions) {
  var isTab2CurrentInvalid = checkTab(questions, "r13CurrentOffence");
  var isTab2PreviousInvalid = checkTab(questions, "r13PreviousOffence");
  return isTab2CurrentInvalid || isTab2PreviousInvalid;
};

var validateForm = function() {
  if (me.createUserForm.username.$error.required) {
    pageUtil.toastError(MSG.ERROR.USERNAME_REQUIRED);
    return false;
  }
  if (me.createUserForm.username.$error.pattern) {
    pageUtil.toastError(
      "User name is invalid, can only contain letters or digits"
    );
    return false;
  }
  if (me.createUserForm.firstName.$error.required) {
    pageUtil.toastError(MSG.ERROR.FIRSTNAME_REQUIRED);
    return false;
  }
  if (me.createUserForm.firstName.$error.pattern) {
    pageUtil.toastError(COMMON_VALIDATIONS.FIRST_NAME.message);
    return false;
  }
  if (me.createUserForm.sureName.$error.required) {
    pageUtil.toastError(MSG.ERROR.SURNAME_REQUIRED);
    return false;
  }
  if (me.createUserForm.sureName.$error.pattern) {
    pageUtil.toastError(COMMON_VALIDATIONS.FAMILY_NAME.message);
    return false;
  }
  if (!me.model.Gender) {
    pageUtil.toastError(MSG.ERROR.GENDER_REQUIRED);
    return false;
  }
  if (
    !me.createUserForm.email.$$rawModelValue ||
    me.createUserForm.email.$$rawModelValue.trim() === ""
  ) {
    pageUtil.toastError(MSG.ERROR.EMAIL_REQUIRED);
    return false;
  }
  if (me.createUserForm.email.$invalid) {
    pageUtil.toastError(MSG.ERROR.EMAIL_INVALID);
    return false;
  }
  if (me.createUserForm.officeNumber.$error.required) {
    pageUtil.toastError(MSG.ERROR.OFFICE_NUMBER_REQUIRED);
    return false;
  }
  if (me.createUserForm.officeNumber.$error.pattern) {
    pageUtil.toastError(COMMON_VALIDATIONS.TELEPHONE_NUMBER.message);
    return false;
  }
  if (me.createUserForm.mobileNumber.$error.pattern) {
    pageUtil.toastError(COMMON_VALIDATIONS.MOBILE_NUMBER.message);
    return false;
  }
  return true;
};
