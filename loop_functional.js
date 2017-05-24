/* eslint-disable */

import R from 'ramda';
var getLMCList = function(crc) {
    for (var a = 0; a < crc.lmcs.length; a++) {
        for (var b = 0; b < crc.lmcList.length; b++) {
            if (crc.lmcs[a] === crc.lmcList[b].value) {
                crc.lmcList[b].ticked = true;
            }
        }
    }isTab2CurrentInvalid
    return crc;
};

var getLMCList = function(crc, first, second) {
    crc[first].forEach(function(a) {
        check(crc, second, a);
    });
    return crc;
};


function check(crc, second, a) {
    crc[second].forEach(function(b) {
        a === b.value && (b.ticked = true);
    });
}







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

let error = (form, MSG) => R.cond([
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.pattern, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
    [form.username.$error.required, MSG.ERROR.USERNAME_REQUIRED],
])(form);