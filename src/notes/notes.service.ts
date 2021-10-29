import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  create(createNoteDto: CreateNoteDto) {
    return new this.noteModel(createNoteDto).save();
  }

  findAll() {
    return this.noteModel.find();
  }

  findOne(id: string) {
    return this.noteModel.findById(id);
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.noteModel.updateOne(
      { _id: id },
      { $set: { ...updateNoteDto } },
    );
  }

  remove(id: string) {
    return this.noteModel.deleteOne({ _id: id });
  }
}
