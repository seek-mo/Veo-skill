const { exec } = require('child_process');

function render(compiled, output) {
  const cmd = `ffmpeg ${compiled.inputs} -filter_complex "${compiled.filter}" ${compiled.output} -y ${output}`;

  console.log(cmd);

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
    } else {
      console.log('Render complete');
    }
  });
}

module.exports = render;
