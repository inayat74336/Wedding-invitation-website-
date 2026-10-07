/**
 * Royal Indian Wedding Ambient Music Synthesizer
 * Uses Web Audio API to create authentic serene Raag Yaman ambient drone (Tanpura + Sitar harmonics)
 * Zero external audio files required, runs seamlessly and offline on mobile.
 */

class IndianWeddingAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private melodyInterval: number | null = null;
  private activeNodes: (OscillatorNode | GainNode)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playWaxSealSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Gentle soft chime for opening
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now); // 528 Hz auspicious frequency
      osc.frequency.exponentialRampToValueAtTime(1056, now + 0.4);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Audio not permitted yet
    }
  }

  public playCelebrationPop() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Party popper pop sound (low punch to snap)
      const popOsc = this.ctx.createOscillator();
      const popGain = this.ctx.createGain();
      popOsc.type = 'triangle';
      popOsc.frequency.setValueAtTime(260, now);
      popOsc.frequency.exponentialRampToValueAtTime(60, now + 0.12);

      popGain.gain.setValueAtTime(0.2, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      popOsc.connect(popGain);
      popGain.connect(this.ctx.destination);
      popOsc.start(now);
      popOsc.stop(now + 0.15);

      // 2. Auspicious celebratory chime chords (Raag Yaman notes D5, F#5, A5, D6)
      const chordFreqs = [587.33, 739.99, 880.0, 1174.66];
      chordFreqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 0.05 + idx * 0.04);

        gain.gain.setValueAtTime(0.001, now + 0.05 + idx * 0.04);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.09 + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5 + idx * 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + 0.05 + idx * 0.04);
        osc.stop(now + 1.6 + idx * 0.1);
      });
    } catch {
      // Audio not permitted yet
    }
  }

  public startMusic() {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;

    // Fade in master gain smoothly to gentle ambient level
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.18, now + 2.5);

    // 1. Tanpura drone (Root: D3 = 146.83 Hz, Fifth: A2 = 110 Hz, Octave: D4 = 293.66 Hz)
    const droneFreqs = [146.83, 110.0, 220.0, 293.66];
    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.4, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, this.ctx.currentTime);

      // Subtle breathing LFO for organic tanpura swirl
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.18 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      lfo.connect(lfoGain.gain);

      gain.gain.setValueAtTime(0.045 / (idx + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      lfo.start();
      this.activeNodes.push(osc, gain, lfo);
    });

    // 2. Gentle meditative Indian flute & sitar pluck arpeggios (Raag Yaman notes in D major: D, E, F#, G#, A, B, C#)
    const yamanScale = [293.66, 329.63, 369.99, 415.30, 440.00, 493.88, 554.37, 587.33];
    let noteIdx = 0;

    const playAmbientPluck = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      const freq = yamanScale[noteIdx % yamanScale.length];
      noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % yamanScale.length;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      // Add gentle sitar/flute harmonic
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.5, t);
      filter.Q.setValueAtTime(3.0, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 3.6);
    };

    // Play tranquil notes every 2-3 seconds
    this.melodyInterval = window.setInterval(() => {
      if (this.isPlaying) {
        playAmbientPluck();
      }
    }, 2800);

    // Initial note
    playAmbientPluck();
  }

  public stopMusic() {
    if (!this.isPlaying) return;
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);
    }
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    setTimeout(() => {
      this.activeNodes.forEach(node => {
        try {
          if ('stop' in node && typeof node.stop === 'function') {
            node.stop();
          }
        } catch {
          // ignore
        }
      });
      this.activeNodes = [];
      this.isPlaying = false;
    }, 1250);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const royalAudioPlayer = new IndianWeddingAudioPlayer();
