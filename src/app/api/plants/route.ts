import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const plants = await prisma.plant.findMany({
      include: {
        careLogs: {
          orderBy: {
            createdAt: 'desc'
          },
          take: 5
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json(plants)
  } catch (error) {
    console.error('Error fetching plants:', error)
    return NextResponse.json(
      { error: 'Failed to fetch plants' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, species, description, location, imageUrl } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Plant name is required' },
        { status: 400 }
      )
    }

    const plant = await prisma.plant.create({
      data: {
        name,
        species,
        description,
        location,
        imageUrl
      }
    })

    return NextResponse.json(plant, { status: 201 })
  } catch (error) {
    console.error('Error creating plant:', error)
    return NextResponse.json(
      { error: 'Failed to create plant' },
      { status: 500 }
    )
  }
} 