class TimelineParser {
  constructor(timeline) {
    this.timeline = timeline;
  }

  getTracks(type) {
    return (this.timeline.tracks || []).filter(t => t.type === type);
  }

  getClips(type) {
    return this.getTracks(type).flatMap(t => t.clips || []);
  }
}

module.exports = TimelineParser;
