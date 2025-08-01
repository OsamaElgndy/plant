import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const careLogs = await prisma.careLog.findMany({
      include: {
        plant: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json(careLogs)
  } catch (error) {
    console.error('Error fetching care logs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch care logs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { plantId, action, notes } = body

    if (!plantId || !action) {
      return NextResponse.json(
        { error: 'Plant ID and action are required' },
        { status: 400 }
      )
    }

    // Create care log
    const careLog = await prisma.careLog.create({
      data: {
        plantId,
        action,
        notes
      }
    })

    // Update plant's last watered/fertilized date based on action
    const updateData: any = {}
    if (action.toLowerCase().includes('water')) {
      updateData.lastWatered = new Date()
    }
    if (action.toLowerCase().includes('fertilize')) {
      updateData.lastFertilized = new Date()
    }

    if (Object.keys(updateData).length > 0) {
      await prisma.plant.update({
        where: { id: plantId },
        data: updateData
      })
    }

    return NextResponse.json(careLog, { status: 201 })
  } catch (error) {
    console.error('Error creating care log:', error)
    return NextResponse.json(
      { error: 'Failed to create care log' },
      { status: 500 }
    )
  }
} 