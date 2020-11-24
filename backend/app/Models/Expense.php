<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount', 'date', 'category_id'
    ];

    protected $hidden = ['timestamp'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
