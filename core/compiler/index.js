const buildTransitions = require('./transitions');

class Compiler {
  constructor(timeline) {
    this.timeline = timeline;
  }

  compile() {
    const inputs = [];
    const filters = [];

    const clips = (this.timeline.tracks || [])
      .filter(t => t.type === 'video')
      .flatMap(t => t.clips || []);

    // prepare inputs
    clips.forEach((clip, i) => {
      inputs.push(`-i ${clip.src}`);
      filters.push(`[${i}:v]setpts=PTS-STARTPTS[v${i}]`);
    });

    // transitions
    const transitionResult = buildTransitions(clips);
    filters.push(...transitionResult.filters);

    return {
      inputs: inputs.join(' '),
      filter: filters.join('; '),
      output: `-map ${transitionResult.output}`
    };
  }
}

module.exports = Compiler;
