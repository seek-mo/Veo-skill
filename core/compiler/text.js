function buildTextFilters(textClips) {
  const filters = [];

  textClips.forEach((clip, i) => {
    const start = clip.start || 0;
    const end = clip.end || 5;
    const txt = (clip.text || '').replace(/:/g, '\\:').replace(/'/g, "\\'");

    filters.push(
      `drawtext=text='${txt}':fontcolor=white:fontsize=48:x=(w-text_w)/2:y=h-100:enable='between(t,${start},${end})'`
    );
  });

  return filters;
}

module.exports = buildTextFilters;
