function collabFunctionality() {
    var lefts = document.querySelectorAll(
      "#vision, #mission, #belief, #funding,#free"
    );
    document.getElementById("collab").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }

  function visionFunctionality() {
    var lefts = document.querySelectorAll(
      "#collab, #mission, #belief, #funding,#free"
    );
    document.getElementById("vision").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }

  function missionFunctionality() {
    var lefts = document.querySelectorAll(
      "#collab, #vision, #belief, #funding,#free"
    );
    document.getElementById("mission").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }

  function beliefFunctionality() {
    var lefts = document.querySelectorAll(
      "#collab, #vision, #mission, #funding,#free"
    );
    document.getElementById("belief").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }

  function fundingFunctionality() {
    var lefts = document.querySelectorAll(
      "#collab, #vision, #mission, #belief,#free"
    );
    document.getElementById("funding").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }

  function freeFunctionality() {
    var lefts = document.querySelectorAll(
      "#collab, #vision, #mission, #belief,#funding"
    );
    document.getElementById("free").style.display = "block";
    var length = lefts.length;
    for (var i = 0; i < length; i++) {
      lefts[i].style.display = "none";
    }
  }