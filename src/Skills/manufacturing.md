You are designing a project preview UI only for a private internal ERP Manufacturing Module.
Do not use real company screenshots, logos, or confidential data.
The design should look like a realistic enterprise manufacturing dashboard preview using placeholder analytics, workflow cards, schedules, and production visuals.

The goal is to visually communicate how the manufacturing workflow operates inside the ERP system.

Use a modern dark industrial UI theme similar to high-end ERP/MES systems:

dark navy background
soft orange/copper accents
clean glassmorphism panels
minimal but premium enterprise feel
cinematic dashboard presentation
avoid overly colorful startup-style UI

Manufacturing Workflow Overview:

Sales Order
The process starts from a Sales Order.
Customer orders products/items.
The system reads the Sales Order data.
Job Order (Made-to-Order)
A Job Order is generated based on the Sales Order.
This is for made-to-order manufacturing.
The Job Order contains:
ordered items
required quantity
target completion date
manufacturing instructions
production status
Think of this as a manufacturing request generated from customer demand.
Stocking Order
A Stocking Order is different from Job Orders.
It is created to replenish or stock inventory.
Used when the company wants to produce items ahead of demand.
It contains:
inventory item
stocking quantity
warehouse target
reorder thresholds
stock status
Production Order
A Production Order is created from a Stocking Order.
This is the actual production execution stage.
The system reads the Stocking Order and creates production tasks.
Production Order contains:
raw materials
machine assignments
workstations
production schedule
progress tracking
yield
downtime
operator assignments
completion percentage

Important Manufacturing Logic:

Sales Order → generates Job Order
Stocking Order → generates Production Order
Production Order handles the actual manufacturing process

Suggested Dashboard Sections:

Weekly Production Schedule
Active Job Orders
Production Queue
Inventory Stock Levels
Machine Utilization
Yield Percentage
Downtime Monitoring
Production Timeline
Manufacturing KPIs
Workstation Status
Warehouse Inventory Preview

UI/UX Direction:

Enterprise ERP aesthetic
Clean spacing
Large production schedule cards
Timeline/grid-based layouts
Manufacturing analytics widgets
Industrial typography
Subtle animations
Avoid clutter
Make it look like a premium internal company system

DO NOT:

use real company branding
use real data
use public SaaS CRM styling
make it look like an e-commerce app
make it overly futuristic sci-fi

The design should communicate:
“Internal enterprise manufacturing operations system for production management and inventory manufacturing workflows.”