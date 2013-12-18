<?php

class Todo extends Eloquent {
	protected $guarded = [];

	public function getCompletedAttribute($value)
	{
		return (boolean) $value;
	}
}