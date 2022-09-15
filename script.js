$(function() {
  var WorldTwo = {
    CANVAS: {
      background: "black"
    },
    THEROCKS: [
      0, 0, 600, 20,
      0, 0, 20, 600,
      0, 220, 400, 20
    ],
    THEEVENTS: [
      {
        name: "Alpharius",
        hbox: { x: 100, y: 100, w: 20, h: 20 },
        color: "url('img/pinky/forward.png')",
        backgroundsize: "20px",
        beenTalkedTo: false,
        onEvent: function() {
          console.log("i am alpharius, and this is a lie")
          //playerFights(this)
          this.beenTalkedTo = true
          return false
        }

      },
      {
        name: "jinx the cat",
        hbox: { x: 150, y: 150, w: 40, h: 40 },
        color: "url('bingle-dong-bingle.gif')",
        backgroundsize: "40px",
        timesTalkedTo: parseInt("0"),
        onEvent: function() {
          
          var val = this.timesTalkedTo;
          switch (true) {
            case (val === 0):
              console.log("who dares speak to the mighty jinx?\n")
              this.timesTalkedTo++;
              break;
            case (val===1):
              console.log("you poke jinx for some reason...")
              console.log("hey dont do that thats annoying\n")
              this.timesTalkedTo++
            break;
            case (val===2):
              console.log("you poke jinx again, your asking for trouble")
              console.log("you keep poking me i might have to destroy you\n")
              this.timesTalkedTo++
            break;
              case (val===3):
              console.log("you poke jinx once more, you must have a death wish")
              console.log("if you poke me again i will dissasemble you\n")
              this.timesTalkedTo++
            break;
            case val===4:
              console.log("Thats it im going to flatten you\n")
              playerFights(this)
            break;
            case val>4:
              console.log("you again? go away")
            break;
          }
          return false
        }
      }



    ]
  }

  var WorldOne = {
    CANVAS: {
      height: "600px",
      width: "600px",
      background: "url('topo.png') center",
    },
    THEROCKS: [
      0, 0, 600, 20,
      0, 0, 20, 600,
      100, 20, 20, 40,
      200, 20, 20, 180,
      340, 20, 20, 180,
      240, 60, 100, 20,
      100, 80, 100, 20,
      220, 100, 100, 20,
      240, 140, 100, 20,
      220, 180, 100, 20,
      0, 220, 400, 20
    ],
    THEEVENTS: [
      {
        name: "DOOR",
        hbox: { x: 200, y: 200, w: 20, h: 20 },
        color: "brown",
        beenTalkedTo: false,
        onEvent: function() {
          if (WorldOne.THEEVENTS[1].beenFound) {
            return true
          } else {
            if (!this.beenTalkedTo) {
              console.log("its a locked door")
              console.log("with an odd looking keyhole")
              this.beenTalkedTo = true
            } else {
              console.log("perhaps that suspiciously pink man knows what to do")
            }
            return false
          }
        }
      },
      {
        name: "CANOFBEANS",
        hbox: { x: 180, y: 20, w: 20, h: 20 },
        color: "url('img/bean.png')",
        backgroundsize: "20px",
        beenFound: false,
        onEvent: function() {
          console.log("its a can of slimy heinz beans");
          this.beenFound = true
          var b = $("#CANOFBEANS")
          b.css("width", "0px");
          b.css("height", "0px");
        }
      },
      {
        name: "Steve",
        hbox: { x: 140, y: 60, w: 20, h: 20 },
        color: "pink",
        beenTalkedTo: false,
        onEvent: function() {
          if (!this.beenTalkedTo) {
            console.log("perhaps you need that can of beans to open that door")
            this.beenTalkedTo = true
          } else {
            if (WorldOne.THEEVENTS[0].beenTalkedTo) {
              console.log("the door called me suspicious?, well go tell him hes ugly")
            } else {
              console.log("what... dont question the majestical beans")
            }

          }
        }
      },
      {
        name: "WalkthroughDoor",
        hbox: { x: 100, y: 60, w: 20, h: 20 },
        color: "brown",
        beenTalkedTo: false,
        onEvent: function() {
          return true;
        }
      },
      {
        name: "WalkthroughDoorTwo",
        hbox: { x: 220, y: 60, w: 20, h: 20 },
        color: "brown",
        beenTalkedTo: false,
        onEvent: function() {
          return true;
        }
      },
      //bear is events[5]
      {
        name: "BEAR",
        hbox: { x: 320, y: 20, w: 20, h: 20 },
        color: "url('img/beaor.png')",
        backgroundsize: "20px",
        beenFound: false,
        onEvent: function() {
          console.log("the soft fur of the teddy bear fills you with confidence");
          this.beenFound = true
          var b = $("#BEAR")
          b.css("width", "0px");
          b.css("height", "0px");
        }
      },
      {
        name: "DOORTHATREQUIRES CONFIDENCE",
        hbox: { x: 340, y: 200, w: 20, h: 20 },
        color: "blue",
        beenTalkedTo: false,
        onEvent: function() {
          if (WorldOne.THEEVENTS[5].beenFound) {
            return true
          } else {

            if (WorldOne.THEEVENTS[7].beenTalkedTo) {
              console.log("due to the ork taking all of your stuff you are now stuck outside")
              return false
            } else {
              console.log("This door is particularly intimidating, you dont think you have the confidence to go through it \n namely because its blue")
              return false
            }
          }
        }
      },
      {
        name: "DABIGORK",
        hbox: { x: 380, y: 100, w: 100, h: 100 },
        color: "green",
        beenTalkedTo: false,
        onEvent: function() {
          if (!this.beenTalkedTo) {
            console.log("MEEZA BIG ORK")
            console.log("DIS ORK WANTS ALL YA LOOT")
            console.log("YOU BETTA GIVE ME DA LOOT OR IL HAVE TA CRUMP YA")

            this.beenTalkedTo = true
          } else {
            console.log("You give the big green ork your teddy bear and your can of beans")
            WorldOne.THEEVENTS[1].beenFound = false
            WorldOne.THEEVENTS[5].beenFound = false
            console.log("You are now stuck outside the thing")
            console.log("HAHAHA IZ GOT DA LOOT NOW BOSS, DANKS HUMIE! \n and the ork stomps away laughing")
            var b = $("#DABIGORK")
            b.css("width", "0px");
            b.css("height", "0px");
          }
          return false

        }
      },
      {
        name: "PORTAL",
        hbox: { x: 60, y: 60, w: 20, h: 20 },
        color: "blue",
        beenTalkedTo: false,
        onEvent: function() {
          if (!this.beenTalkedTo) {
            console.log('you see a strange portal, do you walk into it?')
            this.beenTalkedTo = true
          } else {
            console.log("you step into the portal")
            changeCanvasTo(WorldTwo);
            console.log("you somehow end up in a world with a person who looks exactly like you \n and a huge, funny looking cat")
          }


          return false
        }


      }
    ]
  }

  var currentWorld = WorldOne
  drawFirstStuffs(currentWorld)
  var player = $("#player");
  document.addEventListener('keydown', (event) => {
    var code = event.code;
    switch (code) {
      case "KeyD":
        doMove("left", 10);
        player.css("background", "url('img/pinky/left.png')")//to change character img
        player.css("background-size", "20px")
        break;
      case "KeyA":
        doMove("left", -10);
        player.css("background", "url('img/pinky/right.png')")//to change character img
        player.css("background-size", "20px")
        break;
      case "KeyW":
        doMove("top", -10);
        player.css("background", "url('img/pinky/back.png')")//to change character img
        player.css("background-size", "20px")
        break;
      case "KeyS":
        doMove("top", 10);
        player.css("background", "url('img/pinky/forward.png')")//to change character img
        player.css("background-size", "20px")
        break
    }
  }, false);
  function playerFights(enemy) {
    console.log("due to your provocation of " + enemy.name + " she has decided to smite your unimportantness \nprepare to be destroyed")
    console.log("jinx easily throws your annoyying self across the room and you hit the ground with a thud")
    doMove("left",-200)
  }
  function changeCanvasTo(toChangeto) {
    //console.log("clearing canvas...")
    var list = $(".notThePlayer");
    //console.log("the thing is " + list)
    for (var i = list.length - 1; i >= 0; --i) {
      list[i].remove();
    }
    currentWorld = toChangeto
    drawFirstStuffs(currentWorld)
  }

  //initialisation thing
  function drawFirstStuffs(stuff) {
    setBackground(stuff.CANVAS.background)
    makeRoccs(stuff.THEROCKS)
    makeEvents(stuff.THEEVENTS)
  }
  function setBackground(toSet) {
    var b = $("#canvas")
    b.css("background", toSet)
    b.css("background-position", " left 0px top 0px")
    //b.css("background-position",(" left 100px top 100px"))
  }
  function makeDrawCreateThing(parentz, id, classes, isEvent, x, y, w, h) {
    var out = {
      parent: parentz,
      id: id,
      classes: classes,
      isEvent: isEvent,
      hitbox: { x: x, y: y, w: w, h: h }
    }
    return out;
  }


  function drawAndCreate(obj) {
    //console.log("the name of the thing i makin is "+obj.id);
    const element = document.getElementById(obj.parent);
    const temp = document.createElement("div");
    element.appendChild(temp);
    temp.setAttribute("id", obj.id)
    temp.setAttribute("class", obj.classes)
    temp.setAttribute("isEvent", obj.isEvent)
    temp.style.height = (obj.hitbox.h + "px")
    temp.style.left = (obj.hitbox.x + "px")
    temp.style.top = (obj.hitbox.y + "px")
    temp.style.width = (obj.hitbox.w + "px")
    return $(temp)
  }
  function makeEvents(pootis) {
    var q = null
    for (var i = 0; i < pootis.length; i++) {
      q = pootis[i]
      var t = makeDrawCreateThing("events", q.name, "obstacle notThePlayer", true, q.hbox.x, q.hbox.y, q.hbox.w, q.hbox.h)
      var b = drawAndCreate(t)
      b.attr("name", q.name)
      b.css("background", q.color)
      b.css("background-size", q.backgroundsize)
    }
  }

  function makeRoccs(inp) {
    var t = 0
    for (var i = 0; i < inp.length / 4; i++) {
      var r = makeDrawCreateThing("roccs", "rocc" + i, "obstacle notThePlayer", false, inp[t], inp[t + 1], inp[t + 2], inp[t + 3])
      drawAndCreate(r)
      t += 4
    }
  }
  function doMove(dir, amount) {
    if (
      checkIfHitsAnyHitbox(dir, amount, player)
    ) {
      moveEverythingButPlayer(dir, amount, $(".notThePlayer"));
    }
  }
  function moveEverythingButPlayer(dir, amount, obj) {
    for (var i = 0; i < obj.length; i++) {
      var beans = $(obj.get(i))
      var c = parseInt(beans.css(dir))
      beans.css(dir, c - amount)
    }
    //console.log("moving the backgournd of le canvas")
    var b = document.getElementById("canvas").style.backgroundPosition
    //console.log("was " +b);
    b = b.replace("left", "").replace("top", "")
      .replaceAll("px", "").replace(" ", "")
      .replace(" ", "").split(" ")
    var lfPx = parseInt(b[0])
    var toPx = parseInt(b[1])
    //console.log("the ca thing are"+lfPx+" "+toPx);
    switch (dir) {
      case "left":
        lfPx -= amount
        break;
      case "top":
        toPx -= amount
    }
    //console.log("the ca thing are"+lfPx+" "+toPx);
    $("#canvas").css("background-position", (" left " + lfPx + "px top " + toPx + "px"))

  }


  function runEvent(input) {
    var t = input.attr("name")
    if (t != undefined) {
      for (var i = 0; i < currentWorld.THEEVENTS.length; i++) {
        if (currentWorld.THEEVENTS[i].name == t) {
          return currentWorld.THEEVENTS[i].onEvent()
        }
      }
    }
  }

  function checkIfHitsAnyHitbox(dir, amount, obj1) {
    var obs = $(".obstacle")
    for (var i = 0; i < obs.length; i++) {
      var temp = $(obs.get(i))
      if ((temp.attr("id") != "canvas") && !canMove(dir, amount, obj1, temp)) {
        return false
      }
    }
    return true
  }

  function canMove(dir, amount, obj1, obj2) {
    var oh1 = getHitBox(obj1)
    var oh2 = getHitBox(obj2)
    switch (dir) {
      case "left":
        oh1.posX += amount
        oh1.width += amount
        break;
      case "top":
        oh1.posY += amount
        oh1.height += amount
    }
    var l = isWithin(oh1.posX, oh1.width, oh2.posX, oh2.width)
    var t = isWithin(oh1.posY, oh1.height, oh2.posY, oh2.height)
    if (t && l) {
      if (obj2.attr("isEvent")) {
        var q = runEvent(obj2)
        if (q != undefined) {
          return q;
        } else {
          return false
        }
      }
      return false
    } else {
      return true
    }
  }
  function getHitBox(inp) {
    var c = {
      posX: parseInt(inp.css("left")),
      posY: parseInt(inp.css("top")),
      width: parseInt(inp.css("left")) + parseInt(inp.css("width")),
      height: parseInt(inp.css("top")) + parseInt(inp.css("height"))
    }
    return c
  }

  function isWithin(toComMin, toComMax, min, max) {
    if ((toComMin >= min && toComMin < max) || (toComMax > min && toComMax <= max)) {
      return true
    } else {
      return false
    }
  }

  function print(arg){
    console.log(arg);
  }




  //second world

});










