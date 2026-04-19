function buildTransitions(clips) {
  const filters = [];

  let last = `[v0]`;
  let offset = 0;

  for (let i = 1; i < clips.length; i++) {
    const duration = clips[i - 1].duration || 5;
    offset += duration - 1;

    const current = `[v${i}]`;
    const out = `[vx${i}]`;

    filters.push(`${last}${current}xfade=transition=fade:duration=1:offset=${offset}${out}`);

    last = out;
  }

  return {
    filters,
    output: last
  };
}

module.exports = buildTransitions;
