
function getData() {
    var admin = document.getElementById("administrator").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var sex = document.getElementById("sex").value;
    var company = document.getElementById("company").value;
    var age = document.getElementById("age").value;
    var legLength = document.getElementById("legLength").value;
    var workingLeg = document.getElementById("workingLeg").value;
    var standingLeg = document.getElementById("standingLeg").value;
    var threeMonthInjury = document.getElementById("threeMonthInjury").value;
    var fiveYearInjury = document.getElementById("fiveYearInjury").value;
    var consent = document.getElementById("consent").checked;

    var bloodPressure = get_bloodPressure_vals(AileyForm.SBloodPressure.value, AileyForm.DBloodPressure.value);
    var stepTest = get_stepTest_vals(AileyForm.StepTest.value);
    var SLS = get_SLS_vals(AileyForm.SLS.value);
    var wallSquad = get_wallSquad_vals(AileyForm.WallSquad.value);
    var scapula = get_scapula_vals(AileyForm.Scapula.value);
    var rightHtof = get_htof_vals(AileyForm.rightHtof.value, AileyForm.rightHtod.value);
    var leftHtof = get_htof_vals(AileyForm.leftHtof.value, AileyForm.leftHtod.value);
    var rightHtod = get_htod_vals(AileyForm.rightHtod.value);
    var leftHtod = get_htod_vals(AileyForm.leftHtod.value);


    //need to confirm
    //var thomasTest = get_thomasTest_vals(AileyForm.ThomasTest.value);
    //var hipGrind = get_hipGrind_vals(AileyForm.HipGrind.value);

    var SLR = get_SLR_vals(AileyForm.SLR.value);
    var kneeHyperExtension = get_kneeHyperExtension_vals(AileyForm.KneeHyperExtension.value);
    //need to confirm
    var kneeHipInt = get_kneeHipInt_vals(AileyForm.KneeHipInt.value);
    var kneeHipExt = get_kneeHipExt_vals(AileyForm.KneeHipExt.value);
    //need to confirm
    var firstMTPDF = get_firstMTPDF_vals(AileyForm.FirstMTPDF.value);

    var IRvsER = get_IRvsER_vals(AileyForm.KneeHipInt.value, AileyForm.FirstMTPDF.value);

    var passeBalance = get_passeBalance_vals(AileyForm.PasseBalance.value);
    var SLBalEC = get_SLBalEC_vals(AileyForm.SLBalEC.value);
    //need to confirm 
    //var yBalance = get_yBalance_vals(AileyForm.YBalance.value);
    // what is the min
    var slReleve = get_slReleve_vals(AileyForm.SLReleve.value);
    var slBridge = get_slBridge_vals(AileyForm.SLBridge.value);
    var sidePlandHip = get_sidePlandHip_vals(AileyForm.SidePlandHip.value);
    var CKCUEST = get_CKCUEST_vals(AileyForm.CKCUEST.value);

    var obj = {
        admin: admin,
        date: date,
        email: email,
        firstName: firstName,
        lastName: lastName,
        ethnicity: ethnicity,
        sex: sex,
        company: company,
        age: age,
        legLength: legLength,
        workingLeg: workingLeg,
        standingLeg: standingLeg,
        threeMonthInjury: threeMonthInjury,
        fiveYearInjury: fiveYearInjury,
        consent: consent,

        bloodPressure: bloodPressure,
        stepTest: stepTest,
        SLS: SLS,
        wallSquad: wallSquad,
        scapula: scapula,
        rightHtod: rightHtod,
        leftHtod: leftHtod,
        rightHtof: rightHtof,
        leftHtof: leftHtof,
        SLR: SLR,
        kneeHyperExtension: kneeHyperExtension,
        kneeHipInt: kneeHipInt,
        kneeHipExt: kneeHipExt,
        firstMTPDF: firstMTPDF,
        IRvsER: IRvsER,
        passeBalance: passeBalance,
        SLBalEC: SLBalEC,
        slReleve: slReleve,
        slBridge: slBridge,
        sidePlandHip: sidePlandHip,
        CKCUEST: CKCUEST,

    }

    console.log(
        obj.admin + "\n" +
        obj.date + "\n" +
        obj.firstName + "\n" +
        obj.lastName + "\n" +
        obj.ethnicity + "\n" +
        obj.sex + "\n" +
        obj.company + "\n" +
        obj.age + "\n" +
        obj.legLength + "\n" +
        obj.standingLeg + "\n" +
        obj.threeMonthInjury + "\n" +
        obj.fiveYearInjury + "\n" +
        obj.consent + "\n\n" +

        "bloodPressure: " + obj.bloodPressure.grade + "\n" +
        "bloodPressure comments: " + obj.bloodPressure.comments + "\n" +
        "\n" +
        "stepTest: " + obj.stepTest.grade + "\n" +
        "stepTest comments: " + obj.stepTest.comments + "\n" +
        "\n" +
        "SLS: " + obj.SLS.grade + "\n" +
        "SLS comments: " + obj.stepTest.comments + "\n" +
        "\n" +
        "wallSquad: " + obj.wallSquad.grade + "\n" +
        "wallSquad score: " + obj.wallSquad.score + "\n" +
        "\n" +
        "rightHtod: " + obj.rightHtod.grade + "\n" +
        "rightHtod comments:" + obj.rightHtod.comments + "\n" +
        "\n" +
        "leftHtod: " + obj.leftHtod.grade + "\n" +
        "leftHtod comments:" + obj.leftHtod.comments + "\n" +
        "\n" +
        "rightHtof: " + obj.rightHtof.grade + "\n" +
        "rightHtof comments:" + obj.rightHtof.comments + "\n" +
        "\n" +
        "leftHtod: " + obj.leftHtod.grade + "\n" +
        "leftHtod comments:" + obj.leftHtod.comments + "\n" +
        "\n" +
        "SLR: " + obj.SLR.grade + "\n" +
        "SLR comments:" + obj.SLR.comments + "\n" +
        "\n" +
        "kneeHyperExtension: " + obj.kneeHyperExtension.grade + "\n" +
        "kneeHyperExtension comments " + obj.kneeHyperExtension.comments + "\n" +
        "\n" +
        "kneeHipInt: " + obj.kneeHipInt.grade + "\n" +
        "kneeHipInt comments: " + obj.kneeHipInt.comments + "\n" +
        "\n" +
        "kneeHipExt: " + obj.kneeHipExt.grade + "\n" +
        "kneeHipExt comments: " + obj.kneeHipExt.comments + "\n" +
        "\n" +
        "IRvsER: " + obj.IRvsER.grade + "\n" +
        "IRvsER comments: " + obj.IRvsER.comments + "\n" +
        "\n" +
        "firstMTPDF: " + obj.firstMTPDF.grade + "\n" +
        "firstMTPDF comments: " + obj.firstMTPDF.comments + "\n" +
        "\n" +
        "passeBalance: " + obj.passeBalance.grade + "\n" +
        "\n" +
        "SLBalEC: " + obj.SLBalEC.grade + "\n" +
        "SLBalEC comments: " + obj.SLBalEC.comments + "\n" +
        "\n" +
        "slReleve: " + obj.slReleve.grade + "\n" +
        "slReleve comments: " + obj.slReleve.comments + "\n" +
        "\n" +
        "slBridge: " + obj.slBridge.grade + "\n" +
        "slBridge comments: " + obj.slBridge.comments + "\n" +
        "\n" +
        "sidePlandHip: " + obj.sidePlandHip.grade + "\n" +
        "sidePlandHip comments: " + obj.sidePlandHip.comments + "\n" +
        "\n" +
        "CKCUEST: " + obj.CKCUEST.grade + "\n" +
        "CKCUEST comments: " + obj.CKCUEST.comments + "\n"


    )

    return obj;


}



function value_ranges(amount, groups) {
    for (g in groups) {
        if ((amount >= groups[g]['min']) && (amount <= groups[g]['max'])) {
            var out = groups[g]
            out['amount'] = amount
        }
    }
    return out
}

function get_bloodPressure_vals(amount1, amount2) {

    var systolic = Math.ceil(amount1);
    var diastolic = Math.ceil(amount2);


    var g1 = { grade: "Excellent", comments: "Blood Pressure: is a test that measures the force (pressure) in your arteries as your heart pumps. If your results are in the Elevated or Hypertension ranges, get another measurement to double check the values. If the results remain the same, then make an appointment with your medical doctor" };
    var g2 = { grade: "Low", comments: "Blood Pressure: is a test that measures the force (pressure) in your arteries as your heart pumps. If your results are in the Elevated or Hypertension ranges, get another measurement to double check the values. If the results remain the same, then make an appointment with your medical doctor" };
    var g3 = { grade: "Elevated", comments: "Blood Pressure: is a test that measures the force (pressure) in your arteries as your heart pumps. If your results are in the Elevated or Hypertension ranges, get another measurement to double check the values. If the results remain the same, then make an appointment with your medical doctor" };
    var g4 = { grade: "High", comments: "Blood Pressure: is a test that measures the force (pressure) in your arteries as your heart pumps. If your results are in the Elevated or Hypertension ranges, get another measurement to double check the values. If the results remain the same, then make an appointment with your medical doctor" };


    if ((systolic >= 90 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80)) {
        return g1;
    } else if (systolic < 90 && diastolic < 60) {
        return g2;
    } else if ((systolic >= 120 && systolic <= 129) && diastolic <= 80) {
        return g3;
        //need to confirm
    } else if (systolic > 129 && diastolic > 80) {
        return g4;
    }


}

function get_stepTest_vals(amount) {

    var step = Math.ceil(amount);

    var g1 = { grade: "Excellent", comments: "This is a test of aerobic fitness" }
    var g2 = { grade: "Very Good", comments: "This is a test of aerobic fitness" }
    var g3 = { grade: "Good", comments: "This is a test of aerobic fitness" }
    var g4 = { grade: "Average", comments: "This is a test of aerobic fitness" }
    var g5 = { grade: "Below Average", comments: "This is a test of aerobic fitness" }
    var g6 = { grade: "Poor", comments: "This is a test of aerobic fitness" }
    var g7 = { grade: "Very poor", comments: "This is a test of aerobic fitness" }

    if (step == 0) {
        return g1;
    } else if (step == 1) {
        return g2;
    } else if (step == 2) {
        return g3;
    } else if (step == 3) {
        return g4;
    } else if (step == 4) {
        return g5;
    } else if (step == 5) {
        return g6;
    } else if (step >= 6) {
        return g7;
    }

}

function get_SLS_vals(amount) {

    var sls = Math.ceil(amount);

    var g1 = { grade: "Excellent", comments: "This test assesses hip and knee control & knee alignment with movement." }
    var g2 = { grade: "Good", comments: "This test assesses hip and knee control & knee alignment with movement." }
    var g3 = { grade: "Needs Work", comments: "This test assesses hip and knee control & knee alignment with movement." }

    if (sls >= 5) {
        return g3;
    } else if (sls == 4) {
        return g2;
    } else if (sls <= 3) {
        return g1;
    }

}

function get_wallSquad_vals(amount) {

    var wallSquad = Math.ceil(amount);

    var g1 = { grade: "Excellent", score: 100 }
    var g2 = { grade: "Good", score: 75 }
    var g3 = { grade: "Needs Work", score: 50 }

    if (wallSquad >= 60) {
        return g1;
    } else if (wallSquad >= 50 && wallSquad <= 59) {
        return g2;
    } else if (wallSquad >= 45 && wallSquad <= 49) {
        return g3;
    }

}

function get_scapula_vals(amount) {

    var scapula = Math.ceil(amount);

    var g1 = { grade: "Needs Work", comments: "Good scapula control is key to shoulder health. Lack of adequate upward rotation may cause shoulder impingement and neck pain. Scapula winging & jittering are indicative of alignment and muscle imbalances around the scapula" }
    var g2 = { grade: "Good", comments: "Good scapula control is key to shoulder health. Lack of adequate upward rotation may cause shoulder impingement and neck pain. Scapula winging & jittering are indicative of alignment and muscle imbalances around the scapula" }
    // need to confirm
    if (scapula >= 2) {
        return g1;
    } else if (scapula <= 1) {
        return g2;
    }
}

function get_htod_vals(amount) {
    var roundToCeil = Math.ceil(amount);

    var definition = {

        g1: { min: 60, max: Infinity, score: 100, grade: "Excellent", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
        g2: { min: 50, max: 59, score: 75, grade: "Good", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
        g3: { min: 45, max: 49, score: 50, grade: "Average", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
        g4: { min: 40, max: 45, score: 25, grade: "Poor", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." },
        g5: { min: 0, max: 40, score: 0, grade: "Very Poor", comments: "Full and symmertical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }

    }

    return value_ranges(roundToCeil, definition)

}

function get_htof_vals(htofAmount, htodAmount) {
    var roundToCeilHTOF = Math.ceil(htofAmount);
    var roundToCeilHTOD = Math.ceil(htodAmount);

    var difference = roundToCeilHTOF - roundToCeilHTOD;

    var g1 = { score: 100, grade: "Excellent", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
    var g2 = { score: 75, grade: "Good", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
    var g3 = { score: 50, grade: "Fair", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
    var g4 = { score: 25, grade: "Poor", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }
    var g5 = { score: 0, grade: "Very Poor", comments: "Full and symmetrical hip range of motion is important for overall joint health. Limited and excess hip range of motion can increase the risk of injury, decrease stability, and affect performance." }

    if (roundToCeilHTOF === roundToCeilHTOD) {
        return g2;
    } else if (roundToCeilHTOF < roundToCeilHTOD) {
        return g3;
    } else if (difference >= 1 && difference <= 4) {
        return g3
    } else if (difference >= 5 && difference <= 9) {
        return g4;
    } else if (difference >= 10) {
        return g5;
    }
}

function get_SLR_vals(amount) {

    var slr = Math.ceil(amount);
    var definition = {

        g1: { min: 110, max: Infinity, grade: "Excellent", comments: "This is a test of hamstring flexibility. A score <90 in dancers is a problem that can lead to hamstring strains, hip problem and/or low back pain" },
        g2: { min: 90, max: 109, grade: "Needs Work", comments: "This is a test of hamstring flexibility. A score <90 in dancers is a problem that can lead to hamstring strains, hip problem and/or low back pain" },
        g3: { min: 0, max: 89, grade: "Fair", comments: "This is a test of hamstring flexibility. A score <90 in dancers is a problem that can lead to hamstring strains, hip problem and/or low back pain" }
    }

    return value_ranges(slr, definition)
}

function get_kneeHyperExtension_vals(amount) {

    var KHExtension = Math.ceil(amount);

    var g1 = { grade: "Needs Work", comments: "Hypertension of 10° or more may increase the risk of back, knee, hip, ankle problem.  It is important to strengthen the calves and hamstrings and avoid standing in hyperextension for prolonged periods" }
    var g2 = { grade: "Good", comments: "Hypertension of 10° or more may increase the risk of back, knee, hip, ankle problem.  It is important to strengthen the calves and hamstrings and avoid standing in hyperextension for prolonged periods" }


    if (KHExtension >= 10) {
        return g1;
    } else {
        return g2;
    }

}
function get_kneeHipInt_vals(amount,) {

    var g1 = { grade: "Needs Work", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }
    var g2 = { grade: "Good", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }

    var kneeHipInt = Math.ceil(amount);


    if (kneeHipInt <= 30) {
        return g1;
    } else {
        return g2;
    }
}

function get_kneeHipExt_vals(amount,) {

    var g1 = { grade: "Problem", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }
    var g2 = { grade: "Good", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }

    var kneeHipInt = Math.ceil(amount);


    if (kneeHipInt <= 45) {
        return g1;
    } else {
        return g2;
    }
}
// need to confirm what to do with Prone hip IR, Prone hip ER
function get_IRvsER_vals(amount1, amount2) {

    var KHinternal = Math.ceil(amount1);
    var KHexternal = Math.ceil(amount2);

    var difference = Math.abs(KHinternal - KHexternal);

    var g1 = { grade: "See PT", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }
    var g2 = { grade: "Needs Work", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }
    var g3 = { grade: "Good", comments: "Adequate hip external (turnout) & rotation (turn in) are both important for hip health.  Insufficient or an imbalance in hip rotation increases the risk of hip, pelvis, and low back dysfunction." }



    if (difference >= 10) {
        return g1;
    } else if (difference >= 5 && difference <= 9) {
        return g2;
    } else if (difference <= 4) {
        return g3
    }

}



function get_firstMTPDF_vals(amount,) {

    var g1 = { grade: "Exelent", comments: "90° of great toe extension is require for healthy relevé position. Inadequate great toe extension can lead to compensations which may cause foot and ankle injuries." }
    var g2 = { grade: "Needs Work", comments: "90° of great toe extension is require for healthy relevé position. Inadequate great toe extension can lead to compensations which may cause foot and ankle injuries." }

    var kneeHipInt = Math.ceil(amount);


    if (kneeHipInt >= 90) {
        return g1;
    } else {
        return g2;
    }
}

function get_passeBalance_vals(amount) {

    var passeBalance = Math.ceil(amount);

    var definition = {

        g1: { min: 13, max: Infinity, grade: "Exelent" },
        g2: { min: 9, max: 12, grade: "Very Good" },
        g3: { min: 5, max: 8, grade: "Average" },
        g4: { min: 0, max: 4, grade: "Needs Work" }
    }

    return value_ranges(passeBalance, definition)

}

function get_SLBalEC_vals(amount) {

    var SLBalEC = Math.ceil(amount);

    var definition = {

        g1: { min: 45, max: Infinity, grade: "Exelent", comments: "This is a test of ankle/foot proprioception, muscle strength, & motor control" },
        g2: { min: 30, max: 45, grade: "Good", comments: "This is a test of ankle/foot proprioception, muscle strength, & motor control" },
        g3: { min: 0, max: 29, grade: "Needs Work", comments: "This is a test of ankle/foot proprioception, muscle strength, & motor control" }
    }

    return value_ranges(SLBalEC, definition)

}

function get_slReleve_vals(amount) {

    var SLReleve = Math.ceil(amount);

    var definition = {

        g1: { min: 35, max: Infinity, grade: "Excellent", comments: "This is test for calf strength. The ability to perform 35 repeated single leg relevés has been linked to a reduce risk of calf, foot, and ankle injuries" },
        g2: { min: 25, max: 34, grade: "Good", comments: "This is test for calf strength. The ability to perform 35 repeated single leg relevés has been linked to a reduce risk of calf, foot, and ankle injuries" },
        g3: { min: 16, max: 24, grade: "Average", comments: "This is test for calf strength. The ability to perform 35 repeated single leg relevés has been linked to a reduce risk of calf, foot, and ankle injuries" },
        g4: { min: 0, max: 15, grade: "Needs Work", comments: "This is test for calf strength. The ability to perform 35 repeated single leg relevés has been linked to a reduce risk of calf, foot, and ankle injuries" }
    }

    return value_ranges(SLReleve, definition)

}

function get_slBridge_vals(amount) {

    var SLBridge = Math.ceil(amount);

    var definition = {

        g1: { min: 30, max: Infinity, grade: "Excellent", comments: "This is a test of hamstring and gluteal strength. Strong hamstrings can reduce you risk of hamstring strains" },
        g2: { min: 25, max: 29, grade: "Good", comments: "This is a test of hamstring and gluteal strength. Strong hamstrings can reduce you risk of hamstring strains" },
        g3: { min: 20, max: 24, grade: "Average", comments: "This is a test of hamstring and gluteal strength. Strong hamstrings can reduce you risk of hamstring strains" },
        g4: { min: 0, max: 19, grade: "Needs Work", comments: "This is a test of hamstring and gluteal strength. Strong hamstrings can reduce you risk of hamstring strains" }
    }

    return value_ranges(SLBridge, definition)

}


function get_sidePlandHip_vals(amount) {

    var sidePlandHip = Math.ceil(amount);

    var definition = {

        g1: { min: 45, max: Infinity, grade: "Excellent", comments: "This a test of core & hip stabilizer strength" },
        g2: { min: 30, max: 44, grade: "Good", comments: "This a test of core & hip stabilizer strength" },
        g3: { min: 20, max: 29, grade: "Average", comments: "This a test of core & hip stabilizer strength" },
        g4: { min: 0, max: 19, grade: "Needs Work", comments: "This a test of core & hip stabilizer strength" }
    }

    return value_ranges(sidePlandHip, definition)

}

function get_CKCUEST_vals(amount) {

    var CKCUEST = Math.ceil(amount);

    var definition = {

        g1: { min: 25, max: Infinity, grade: "Excellent", comments: "This is an endurance test of shoulder and scapula muscles" },
        g2: { min: 20, max: 24, grade: "Good", comments: "This is an endurance test of shoulder and scapula muscles" },
        g3: { min: 16, max: 19, grade: "Average", comments: "This is an endurance test of shoulder and scapula muscles" },
        g4: { min: 10, max: 15, grade: "Needs Work", comments: "This is an endurance test of shoulder and scapula muscles" },
        g5: { min: 0, max: 9, grade: "See PT", comments: "This is an endurance test of shoulder and scapula muscles" }
    }

    return value_ranges(CKCUEST, definition)

}


function validateEmail() {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(AileyForm.email.value)) {
        return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
}

function validateAge() {

    var age = AileyForm.age.value
    if (age >= 0) {
        return (true);
    }

    alert("Invalid number, age must be positive number!");
    return (false);

}

function validateLegLength() {

    var legLength = AileyForm.legLength.value
    if (legLength >= 0) {
        return (true);
    }

    alert("Invalid number, Leg Length must be positive number!");
    return (false);

}

function validateSBloodPressure() {

    var SBloodPressure = AileyForm.SBloodPressure.value
    if (SBloodPressure >= 0) {
        return (true);
    }

    alert("Invalid number, Systolic Blood Pressure must be positive number!");
    return (false);

}

function validateDBloodPressure() {

    var DBloodPressure = AileyForm.DBloodPressure.value
    if (DBloodPressure >= 0) {
        return (true);
    }

    alert("Invalid number, Diastolic Blood Pressure must be positive number!");
    return (false);

}

function validateStepTest() {

    var StepTest = AileyForm.StepTest.value
    if (StepTest >= 0) {
        return (true);
    }

    alert("Invalid number, Step test must be positive number!");
    return (false);

}

function validateSLS() {

    var SLS = AileyForm.SLS.value
    if (SLS >= 0) {
        return (true);
    }

    alert("Invalid number, SLS must be positive number!");
    return (false);

}

function validateWallSquad() {

    var WallSquad = AileyForm.WallSquad.value
    if (WallSquad >= 0) {
        return (true);
    }

    alert("Invalid number, Wall Squad must be positive number!");
    return (false);

}

function validateScapulas() {

    var Scapulas = AileyForm.Scapula.value
    if (Scapulas >= 0) {
        return (true);
    }

    alert("Invalid number, Scapulas must be positive number!");
    return (false);

}

function validateRHTOF() {
    var RHTOF = AileyForm.rightHtof.value;
    if (RHTOF >= 0) {
        return (true);
    }

    alert("Invalid number, Right Hip Turnout - Floor test score must be positive number!");
    return (false);
}

function validateLHTOF() {
    var LHTOF = AileyForm.leftHtof.value;
    if (LHTOF >= 0) {
        return (true);
    }

    alert("Invalid number, Left Hip Turnout - Floor test score must be positive number!");
    return (false);
}

function validateRHTOD() {
    var RHTOD = AileyForm.rightHtod.value;
    if (RHTOD >= 0) {
        return (true);
    }

    alert("Invalid number, Right Hip Turnout - Disc test score must be positive number!");
    return (false);
}

function validateLHTOD() {
    var LHTOD = AileyForm.leftHtod.value;
    if (LHTOD >= 0) {
        return (true);
    }

    alert("Invalid number, Left Hip Turnout - Disc test score must be positive number!");
    return (false);
}


function validateSLR() {

    var SLR = AileyForm.SLR.value;
    if (SLR >= 0) {
        return (true);
    }

    alert("Invalid number, SLR test score must be positive number!");
    return (false);

}

function validateKneeHyperExtension() {

    var KneeHyperExtension = AileyForm.KneeHyperExtension.value;
    if (KneeHyperExtension >= 0) {
        return (true);
    }

    alert("Invalid number, Knee Hyper Extension test score must be positive number!");
    return (false);

}
function validateKneeHipInt() {

    var KneeHipInt = AileyForm.KneeHipInt.value;
    if (KneeHipInt >= 0) {
        return (true);
    }

    alert("Invalid number, Prone hip IR test score must be positive number!");
    return (false);

}

function validateKneeHipExt() {

    var KneeHipExt = AileyForm.KneeHipExt.value;
    if (KneeHipExt >= 0) {
        return (true);
    }

    alert("Invalid number, Prone hip ER test score must be positive number!");
    return (false);

}

function validateFirstMTPDF() {

    var FirstMTPDF = AileyForm.FirstMTPDF.value;
    if (FirstMTPDF >= 0) {
        return (true);
    }

    alert("Invalid number, 1st MTP DF test score must be positive number!");
    return (false);

}

function validatePasseBalance() {

    var PasseBalance = AileyForm.PasseBalance.value;
    if (PasseBalance >= 0) {
        return (true);
    }

    alert("Invalid number, Passe Balance test score must be positive number!");
    return (false);

}

function validateSLBalEC() {

    var SLBalEC = AileyForm.SLBalEC.value;
    if (SLBalEC >= 0) {
        return (true);
    }

    alert("Invalid number, SL Bal EC test score must be positive number!");
    return (false);

}

function validateSLReleve() {

    var SLReleve = AileyForm.SLReleve.value;
    if (SLReleve >= 0) {
        return (true);
    }

    alert("Invalid number, SL Releve test score must be positive number!");
    return (false);

}

function validateSLBridge() {

    var SLBridge = AileyForm.SLBridge.value;
    if (SLBridge >= 0) {
        return (true);
    }

    alert("Invalid number, SL Bridge test score must be positive number!");
    return (false);

}

function validateSidePlandHip() {

    var SidePlandHip = AileyForm.SidePlandHip.value;
    if (SidePlandHip >= 0) {
        return (true);
    }

    alert("Invalid number, Side Pland Hip test score must be positive number!");
    return (false);

}

function validateCkcuest() {
    var ckcuest = AileyForm.CKCUEST.value
    if (ckcuest >= 0) {
        return (true);
    }

    alert("Invalid number, CKCUEST must be positive number!");
    return (false);
}


function validateForm() {

    var dateInput = document.getElementById("date");
    if (!dateInput.value) {
        alert("Date must be filled out");
        return false;
    };

    if (!validateEmail()) { return false; }
    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Email must be filled out");
        return false;
    };
    var firstName = document.getElementById("firstName").value;
    if (firstName === "") {
        alert("First name must be filled out");
        return false;
    };

    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        alert("Last name must be filled out");
        return false;
    };

    if (!validateAge()) { return false; }
    var age = document.getElementById("age").value;
    if (age === "") {
        alert("Age must be filled out");
        return false;
    };

    if (!validateLegLength()) { return false; }
    var age = document.getElementById("legLength").value;
    if (age === "") {
        alert("Leg length must be filled out");
        return false;
    };

    var company = document.getElementById("company").value;
    if (company === "") {
        alert("Company must be filled out");
        return false;
    };

    var SBloodPressure = document.getElementById("SBloodPressure").value;
    if (SBloodPressure === "") {
        alert("Systolic Blood Pressure must be filled out");
        return false;
    };
    if (!validateSBloodPressure()) {
        return false;
    }

    var DBloodPressure = document.getElementById("DBloodPressure").value;
    if (DBloodPressure === "") {
        alert("Diastolic  Blood Pressure must be filled out");
        return false;
    };
    if (!validateDBloodPressure()) {
        return false;
    }

    var StepTest = document.getElementById("StepTest").value;
    if (StepTest === "") {
        alert("Step test score must be filled out");
        return false;
    };
    if (!validateStepTest()) {
        return false;
    }

    var SLS = document.getElementById("SLS").value;
    if (SLS === "") {
        alert("SLS test score must be filled out");
        return false;
    };
    if (!validateSLS()) {
        return false;
    }

    var WallSquad = document.getElementById("WallSquad").value;
    if (WallSquad === "") {
        alert("Wall Squad test score must be filled out");
        return false;
    };
    if (!validateWallSquad()) {
        return false;
    }

    var Scapula = document.getElementById("Scapula").value;
    if (Scapula === "") {
        alert("Scapula test must be filled out");
        return false;
    };
    if (!validateScapulas()) {
        return false;
    }

    var RHTOF = document.getElementById("rightHtof").value;
    if (RHTOF === "") {
        alert("Right Hip Turnout - Floor (HTOF) test score must be filled out");
        return false;
    };
    if (!validateRHTOF()) {
        return false;
    }

    var LHTOF = document.getElementById("leftHtof").value;
    if (LHTOF === "") {
        alert("Left Hip Turnout - Floor (HTOF) test score must be filled out");
        return false;
    };
    if (!validateLHTOF()) {
        return false;
    }

    var RHTOD = document.getElementById("rightHtod").value;
    if (RHTOD === "") {
        alert("Right Hip Turnout - Disc (HTOD) test score must be filled out");
        return false;
    };
    if (!validateRHTOD()) {
        return false;
    }

    var LHTOD = document.getElementById("leftHtod").value;
    if (LHTOD === "") {
        alert("Left Hip Turnout - Disc (HTOD) test score must be filled out");
        return false;
    };
    if (!validateLHTOD()) {
        return false;
    }

    var SLR = document.getElementById("SLR").value;
    if (SLR === "") {
        alert("SLR must be filled out");
        return false;
    };
    if (!validateSLR()) {
        return false;
    }

    var KneeHyperExtension = document.getElementById("KneeHyperExtension").value;
    if (KneeHyperExtension === "") {
        alert("Knee Hyper Extension test must be filled out");
        return false;
    };
    if (!validateKneeHyperExtension()) {
        return false;
    }

    var KneeHipInt = document.getElementById("KneeHipInt").value;
    if (KneeHipInt === "") {
        alert("Prone hip IR must be filled out");
        return false;
    };
    if (!validateKneeHipInt()) {
        return false;
    }

    var KneeHipExt = document.getElementById("KneeHipExt").value;
    if (KneeHipExt === "") {
        alert("Prone hip ER must be filled out");
        return false;
    };
    if (!validateKneeHipExt()) {
        return false;
    }

    var FirstMTPDF = document.getElementById("FirstMTPDF").value;
    if (FirstMTPDF === "") {
        alert("1st MTP DF must be filled out");
        return false;
    };
    if (!validateFirstMTPDF()) {
        return false;
    }
    var PasseBalance = document.getElementById("PasseBalance").value;
    if (PasseBalance === "") {
        alert("Passe Balance test must be filled out");
        return false;
    };
    if (!validatePasseBalance()) {
        return false;
    }

    var SLBalEC = document.getElementById("SLBalEC").value;
    if (SLBalEC === "") {
        alert("SL Bal EC test score must be filled out");
        return false;
    };
    if (!validateSLBalEC()) {
        return false;
    }

    var SLReleve = document.getElementById("SLReleve").value;
    if (SLReleve === "") {
        alert("SL Releve test must be filled out");
        return false;
    };
    if (!validateSLReleve()) {
        return false;
    }

    var SLBridge = document.getElementById("SLBridge").value;
    if (SLBridge === "") {
        alert("SL Bridge test must be filled out");
        return false;
    };
    if (!validateSLBridge()) {
        return false;
    }
    var SidePlandHip = document.getElementById("SidePlandHip").value;
    if (SidePlandHip === "") {
        alert("Side pland w/ hip abduction test must be filled out");
        return false;
    };
    if (!validateSidePlandHip()) {
        return false;
    }

    var ckcuest = document.getElementById("CKCUEST").value;
    if (ckcuest == "") {
        alert("CKCUEST must be filled out");
        return false;
    };
    if (!validateCkcuest()) {
        return false;
    }
    getData()

}

