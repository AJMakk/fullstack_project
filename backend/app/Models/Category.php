<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    protected $hidden = ['timestamp'];

    public function expenses()
    {
    	return $this->hasMany(Expense::class, 'category_id');
    }
}
