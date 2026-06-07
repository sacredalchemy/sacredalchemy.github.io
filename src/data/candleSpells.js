// Spell pricing: ₹888 per day - fee charged on daily basis for selected duration
const DAILY_SPELL_RATE = 888;

const candleSpells = {
  healthSpells: {
    category: 'Health Spells',
    categoryId: 'health-spells',
    emoji: '💚',
    description: 'Sacred spells designed to support physical wellness, vitality, and holistic health restoration.',
    spells: [
      {
        id: 'healing-ritual',
        title: 'Healing & Renewal Ritual',
        description: 'Support emotional healing and spiritual renewal through candlelight. Promote physical recovery and emotional restoration.',
        benefits: [
          'Accelerate physical healing',
          'Emotional restoration',
          'Renewed vitality',
          'Chakra alignment'
        ],
        color: 'white',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
      },
      // Placeholder for future Health Spells - content coming soon
      {
        id: 'immunity-boost',
        title: 'Immunity & Protection Spell',
        description: 'Coming Soon - Strengthen your body\'s natural defenses and promote overall wellness.',
        benefits: [
          'Immune system support',
          'Energy protection',
          'Holistic wellness',
          'Preventive healing'
        ],
        color: 'gold',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
        comingSoon: true,
      },
    ],
  },
  
  relationshipSpells: {
    category: 'Marriage & Relationship Spells',
    categoryId: 'relationship-spells',
    emoji: '💗',
    description: 'Harness sacred energy to strengthen bonds, attract love, and manifest harmonious relationships.',
    spells: [
      {
        id: 'love-attraction',
        title: 'Love Attraction Candle Spell',
        description: 'Invite romantic energy and deep connection into your life. Open your heart to meaningful relationships.',
        benefits: [
          'Attract authentic love',
          'Deepen emotional connection',
          'Invite romantic energy',
          'Open heart chakra'
        ],
        color: 'pink',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
      },
      // Placeholder for future Relationship Spells - content coming soon
      {
        id: 'marriage-harmony',
        title: 'Marriage Harmony & Bond Strengthening',
        description: 'Coming Soon - Enhance understanding, communication, and lasting commitment in marriage.',
        benefits: [
          'Strengthen marital bonds',
          'Improve communication',
          'Enhance understanding',
          'Promote lasting harmony'
        ],
        color: 'red',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
        comingSoon: true,
      },
      {
        id: 'relationship-healing',
        title: 'Relationship Healing & Reconciliation',
        description: 'Coming Soon - Mend broken hearts and restore trust in relationships.',
        benefits: [
          'Heal relationship wounds',
          'Restore trust',
          'Facilitate reconciliation',
          'Clear communication'
        ],
        color: 'rose',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
        comingSoon: true,
      },
    ],
  },

  // Future categories - structure ready for expansion
  prosperity: {
    category: 'Prosperity & Success Spells',
    categoryId: 'prosperity-spells',
    emoji: '💰',
    description: 'Attract abundance, wealth, and success into your life.',
    spells: [
      {
        id: 'abundance-ritual',
        title: 'Money & Abundance Ritual',
        description: 'Coming Soon - Attract prosperity, opportunities, and financial flow.',
        benefits: [
          'Financial abundance',
          'Career opportunities',
          'Prosperity flow',
          'Wealth attraction'
        ],
        color: 'green',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
        comingSoon: true,
      },
    ],
  },

  clarity: {
    category: 'Clarity & Focus Spells',
    categoryId: 'clarity-spells',
    emoji: '✨',
    description: 'Enhance mental clarity, focus, and spiritual insight.',
    spells: [
      {
        id: 'clarity-focus',
        title: 'Clarity & Focus Spell',
        description: 'Coming Soon - Clear mental fog and invite sharp focus into your work and studies.',
        benefits: [
          'Mental clarity',
          'Sharp focus',
          'Decision-making',
          'Spiritual insight'
        ],
        color: 'yellow',
        durationDays: 7,
        price: DAILY_SPELL_RATE * 7,
        priceNote: '₹888 per day (7 days)',
        comingSoon: true,
      },
    ],
  },
};

// Export both the organized categories and a flat array for backward compatibility
const allSpells = [
  ...candleSpells.healthSpells.spells,
  ...candleSpells.relationshipSpells.spells,
  ...candleSpells.prosperity.spells,
  ...candleSpells.clarity.spells,
];

export default candleSpells;
export { allSpells, DAILY_SPELL_RATE };
