require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/database');

const importData = async () => {
  try {
    await connectDB();
    console.log('🌱 Starting seed process...');

    // Clear existing data
    await Product.deleteMany();
    console.log('✅ Cleared existing products');

    // Sample space research products
    await Product.insertMany([
      {
        name: 'High-Resolution Optical Sensor',
        category: 'Sensors',
        description: 'Multi-spectral imaging sensor for Earth observation satellites.',
        price: 125000,
        image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800',
        stock: 5,
        specifications: {
          weight: '2.8 kg',
          dimensions: '30x25x15 cm',
          material: 'Aerospace aluminum',
          powerRequirement: '12-28V DC'
        }
      },
      {
        name: 'Solar Panel Array 100W',
        category: 'Power Systems',
        description: 'Triple-junction GaAs solar cells for LEO/GEO orbits.',
        price: 48000,
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
        stock: 12,
        specifications: {
          weight: '1.2 kg',
          dimensions: '100x50x2 cm',
          powerRequirement: 'N/A (generator)'
        }
      },
      {
        name: 'S-Band Transceiver',
        category: 'Communication Systems',
        description: 'Software-defined radio for telemetry and command.',
        price: 89000,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
        stock: 8,
        specifications: {
          weight: '850 g',
          dimensions: '15x12x8 cm',
          frequency: '2.2-2.4 GHz'
        }
      },
      {
        name: 'ADCS Reaction Wheels',
        category: 'Satellite Components',
        description: 'Three-axis attitude control system with star tracker.',
        price: 175000,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
        stock: 4,
        specifications: {
          weight: '3.5 kg',
          accuracy: '<0.1° (3σ)'
        }
      },
      {
        name: 'Radiation-Hardened Computer',
        category: 'Satellite Components',
        description: 'ARM Cortex-A53 flight computer with redundant systems.',
        price: 95000,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
        stock: 10,
        specifications: {
          weight: '650 g',
          storage: '8GB',
          radiation: '100 krad TID'
        }
      },
      {
        name: 'Thermal Control Louvers',
        category: 'Research Instruments',
        description: 'Passive thermal management system.',
        price: 32000,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
        stock: 15,
        specifications: {
          weight: '1.8 kg',
          range: '-10°C to +40°C'
        }
      },
      {
        name: 'Butane Propulsion Module',
        category: 'Satellite Components',
        description: 'Cold gas propulsion for orbit maintenance.',
        price: 67000,
        image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800',
        stock: 6,
        specifications: {
          weight: '2.1 kg',
          thrust: '0.5-2 N'
        }
      },
      {
        name: '3-Axis Magnetometer',
        category: 'Sensors',
        description: 'Fluxgate magnetometer for attitude determination.',
        price: 24000,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        stock: 20,
        specifications: {
          weight: '180 g',
          resolution: '5 nT'
        }
      },
      {
        name: 'Multi-GNSS Receiver',
        category: 'Research Instruments',
        description: 'GPS/GLONASS/Galileo/BeiDou receiver.',
        price: 38000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZUBRKYN3IfCV5yCz6XZlykpPuF3csEqc4w&s',
        stock: 14,
        specifications: {
          weight: '120 g',
          accuracy: '<2.5m CEP'
        }
      },
      {
        name: 'Li-Ion Battery Pack 20Ah',
        category: 'Power Systems',
        description: 'Space-qualified battery with BMS.',
        price: 42000,
        image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800',
        stock: 18,
        specifications: {
          capacity: '20Ah @ 28V',
          cycles: '>5000'
        }
      },
      {
        name: 'UHF Deployable Antenna',
        category: 'Communication Systems',
        description: 'Spring-loaded omnidirectional antenna.',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800',
        stock: 25,
        specifications: {
          weight: '340 g',
          frequency: '400-450 MHz'
        }
      },
      {
        name: 'Star Tracker Camera',
        category: 'Sensors',
        description: 'Autonomous star tracking with sub-arcsecond accuracy.',
        price: 158000,
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
        stock: 3,
        specifications: {
          weight: '1.1 kg',
          accuracy: '10 arcsec'
        }
      }
    ]);

    console.log('✅ Seeded 12 space research products!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

importData();
