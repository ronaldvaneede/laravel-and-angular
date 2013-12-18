<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('TodoTableSeeder');

		$this->command->info('Todo table seeded!');
	}

}

class TodoTableSeeder extends Seeder {

	public function run()
    {
        DB::table('todos')->delete();

        Todo::create(array('body' => 'Go to store.', 'completed' => '0'));
        Todo::create(array('body' => 'Finish screencast.', 'completed' => '0'));
        Todo::create(array('body' => 'Have lunch.', 'completed' => '0'));
    }
}