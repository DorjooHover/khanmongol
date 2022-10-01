import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class GroupCreateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  categories: [
    {
      id: string;
    },
  ];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  students: [
    {
      id: string;
    },
  ];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  lessons: [
    {
      id: string;
    },
  ];

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  teacher: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  level: string;
}

export class GroupUpdateDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @ApiProperty()
  categories: [
    {
      id: string;
    },
  ];

  @IsArray()
  @ApiProperty()
  students: [
    {
      id: string;
    },
  ];

  @IsArray()
  @ApiProperty()
  lessons: [
    {
      id: string;
    },
  ];

  @IsString()
  @ApiProperty()
  teacher: string;

  @IsString()
  @ApiProperty()
  level: string;
}

export class StudentDto {
  @IsArray()
  @ApiProperty()
  students: [
    {
      id: string
    }
  ]

  @IsString()
  @ApiProperty()
  name: string
}
export class LessonDto {
  @IsArray()
  @ApiProperty()
  @IsNotEmpty()
  lessons: [
    {
      id: string
    }
  ]
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  name: string
}