function getData() {
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
    var rightHtod = get_rightHtod_vals(AileyForm.rightHtod.value);
    var leftHtod = get_leftHtod_vals(AileyForm.leftHtod.value);
    var rightHtof = get_rightHtof_vals(AileyForm.rightHtof.value, AileyForm.rightHtod.value);
    var leftHtof = get_leftHtof_vals(AileyForm.leftHtof.value, AileyForm.leftHtod.value);

    //need to confirm
    //var thomasTest = get_thomasTest_vals(AileyForm.ThomasTest.value);
    //var hipGrind = get_hipGrind_vals(AileyForm.HipGrind.value);

    var SLR = get_SLR_vals(AileyForm.SLR.value);
    var kneeHyperExtension = get_kneeHyperExtension_vals(AileyForm.KneeHyperExtension.value);
    //need to confirm
    //var kneeHipInt = get_kneeHipInt_vals(AileyForm.KneeHipInt.value);
    //var kneeHipExt = get_kneeHipExt_vals(AileyForm.KneeHipExt.value);
    //need to confirm
    var firstMTPDF = get_firstMTPDF_vals(AileyForm.FirstMTPDF.value);

    var IRvsER = get_IRvsER_vals(AileyForm.KneeHipInt.value, AileyForm.FirstMTPDF.value);

    var passeBalance = get_passeBalance_vals(AileyForm.PasseBalance.value);
    var SLBalEC = get_SLBalEC_vals(AileyForm.SLBalEC.value);
    var yBalance = get_yBalance_vals(AileyForm.YBalance.value);
    var slReleve = get_slReleve_vals(AileyForm.SLReleve.value);
    var slBridge = get_slBridge_vals(AileyForm.SLBridge.value);
    var sidePlankHip = get_sidePlankHip_vals(AileyForm.SidePlankHip.value);
    var CKCUEST = get_CKCUEST_vals(AileyForm.CKCUEST.value);


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
    } else if (systolic >= 129 && diastolic >= 80) {
        g4;
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

function get_SLS_vals(amount) {

    var wallSquad = Math.ceil(amount);

    var g1 = { grade: "Excellent", score: 100 }
    var g2 = { grade: "Good", score: 75 }
    var g3 = { grade: "Needs Work", score: 50 }

    if (wallSquad >= 60) {
        return g1;
    } else if (wallSquad >= 50 && wallSquad <= 59) {
        return g2;
    } else if (wallSquad >= 45 && wallSquad <= 50) {
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


