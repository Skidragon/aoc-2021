const cmds = document.getElementsByTagName("pre")[0].textContent.split("\n");


//part 1
const getSubDistance = () => {
  let horizontal = 0;
  let depth = 0;

  for(let i = 0; i < cmds.length; i++) {
    let [cmd, position] = cmds[i].split(' ');
    if(cmd === 'forward') {
      horizontal += +position;
    }
    if(cmd === 'backward') {
      horizontal -= +position;
    }
    if(cmd === 'down') {
      depth += +position;
    }
    if(cmd === 'up') {
      depth -= +position;
    }
  }
  return horizontal * depth;
}

//part 2
const getSubIntoAimPosition = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for(let i = 0; i < cmds.length; i++) {
    let [cmd, position] = cmds[i].split(' ');
    if(cmd === 'forward') {
      horizontal += +position;
      depth += +position * aim;
    }
    if(cmd === 'backward') {
      horizontal -= +position;
    }
    if(cmd === 'down') {
      aim += +position;
    }
    if(cmd === 'up') {
      aim -= +position;
    }
  }
  return horizontal * depth;
}
